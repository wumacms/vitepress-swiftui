# SwiftUI 状态管理指南

SwiftUI 使用声明式方式更新界面，因此良好的状态管理是构建响应式 UI 的关键。SwiftUI 提供了多种状态属性包装器，帮助开发者在视图之间传递和管理数据。

## 🌱 @State：本地状态

`@State` 是最常用的状态属性，用于在当前视图内存储和响应用户交互的状态变化。

```swift
@State private var counter = 0

Button("点击 \\(counter)") {
    counter += 1
}
```

适合仅在当前视图中使用的状态。


## 🌿 @Binding：双向绑定

当子视图需要读写父视图的状态时，使用 @Binding 实现双向数据传递。

```swift
struct ParentView: View {
    @State private var isOn = false

    var body: some View {
        ToggleView(isOn: $isOn)
    }
}
```

```swift
struct ToggleView: View {
    @Binding var isOn: Bool

    var body: some View {
        Toggle("启用功能", isOn: $isOn)
    }
}
```

适合父子组件间共享状态。

## 🌳 @StateObject 与 @ObservedObject：引用类型状态

用于管理引用类型数据，并使其变化能被视图感知。

```swift
class CounterModel: ObservableObject {
    @Published var count = 0
}
```

• @StateObject：视图首次持有并初始化模型对象

• @ObservedObject：用于传入已有的模型对象

```swift
@StateObject var counter = CounterModel()
```

## 🌍 @EnvironmentObject：全局共享状态

用于跨多个视图共享的数据，适合全局用户状态、主题、设置等。

```swift
class AppSettings: ObservableObject {
    @Published var isDarkMode = false
}
```

注入方式：

```swift
@main
struct MyApp: App {
    var settings = AppSettings()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(settings)
        }
    }
}
```

在任意子视图中读取：

```swift
@EnvironmentObject var settings: AppSettings
```

## 🧱 @Environment：系统环境值

SwiftUI 提供的系统环境变量，如 colorScheme, presentationMode, locale 等。

```swift
@Environment(\\.colorScheme) var colorScheme
```

用于访问系统配置或控制视图行为。

## ✅ 状态管理对比表

| 属性                 | 用途             | 生命周期               | 是否绑定值 | 适用范围         |
|----------------------|------------------|------------------------|------------|------------------|
| `@State`             | 本地状态         | 当前视图               | ✅         | 简单状态         |
| `@Binding`           | 绑定父视图状态   | 外部传入               | ✅         | 父子视图         |
| `@StateObject`       | 初始化并持有对象 | 当前视图生命周期内     | ❌         | 数据模型         |
| `@ObservedObject`    | 观察外部对象     | 外部管理               | ❌         | 子视图观察对象   |
| `@EnvironmentObject` | 全局状态共享     | 由上层注入             | ❌         | 多页面共享       |
| `@Environment`       | 系统环境值       | 系统提供               | ❌         | 系统配置         |

合理使用 SwiftUI 提供的状态管理机制，可以让你的应用更加模块化、响应式和易于维护。