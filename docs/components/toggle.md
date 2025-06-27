# Toggle 开关组件

`Toggle` 是 SwiftUI 中用于二元状态切换（如开/关、启用/禁用）的常用控件，类似于系统设置中的开关按钮。

## 🔰 基本用法

```swift
@State private var isOn = true

Toggle("接收通知", isOn: $isOn)
    .padding()
```

### **说明：**

- Toggle 的第一个参数为标签文本
- isOn 绑定的是一个 @State 布尔变量
- 默认情况下会自动使用系统样式渲染

## **🎨 自定义样式**

```swift
Toggle(isOn: $isDarkMode) {
    Label("深色模式", systemImage: "moon.fill")
}
.padding()
.toggleStyle(SwitchToggleStyle(tint: .purple))
```

- 使用 Label 组合图标与文字
- SwitchToggleStyle(tint:) 设置开关颜色（iOS 15+）

## **🚫 禁用状态**

```swift
Toggle("高级设置", isOn: .constant(true))
    .disabled(true)
```

通过 .disabled(true) 可以让 Toggle 变为不可操作状态。

## **💡 隐藏标签样式**

当不需要左侧文字时，可以使用 labelsHidden() 隐藏标签：

```swift
Toggle("", isOn: $isEnabled)
    .labelsHidden()
    .toggleStyle(SwitchToggleStyle(tint: .green))
```

## **🧩 在列表中使用 Toggle**

```swift
List {
    Toggle("启用 Wi-Fi", isOn: $wifiOn)
    Toggle("启用蓝牙", isOn: $bluetoothOn)
}
```

配合 List 使用可快速构建设置页等 UI 场景。

## **✅ 小贴士**

- 用 @State 控制状态，及时响应 UI 变化
- 使用 Label 提高可读性和图标表达力
- 适合用于设置项、开关功能、隐私权限控制等场景

Toggle 是 SwiftUI 中构建交互逻辑最简单也最常见的组件之一，掌握其使用方式可以帮助你快速构建用户设置与状态控制界面。
