# SwiftUI 与 Apple 原生技术整合

SwiftUI 不仅仅是一个 UI 框架，它可以与 Apple 的一系列原生技术无缝集成，为构建现代、高效、响应式的应用提供强大支持。

## 🔁 1. Combine 框架整合

**Combine** 是 Apple 推出的响应式编程框架，常与 SwiftUI 搭配使用，处理异步事件和数据流。

```swift
import Combine

class UserViewModel: ObservableObject {
    @Published var name = ""
}
```

配合 SwiftUI：

```swift
@StateObject var viewModel = UserViewModel()

TextField("用户名", text: $viewModel.name)
```

使用 @Published 与 @StateObject 可以实现数据的双向绑定与自动刷新视图。

## 🗃 2. Core Data 数据持久化

SwiftUI 支持通过 @FetchRequest 与 Core Data 集成，实现数据存储与展示：

```swift
@FetchRequest(entity: Task.entity(), sortDescriptors: [])
var tasks: FetchedResults<Task>

List(tasks) { task in
    Text(task.title ?? "")
}
```

配合 @Environment(\\.managedObjectContext) 管理上下文，配合 AppDelegate 或 PersistenceController 使用。


## 💾 3. SwiftData（iOS 17+）

SwiftData 是 SwiftUI 生态中更现代化的持久化方案，用于替代 Core Data 的冗余配置。

```swift
@Model struct Task {
    var title: String
    var isDone: Bool
}
```

自动与视图绑定：

```swift
@Query var tasks: [Task]
```

更符合 SwiftUI 的声明式风格，使用更简洁。

## 🎥 4. AVKit 视频播放

SwiftUI 可通过 VideoPlayer（iOS 14+）快速播放视频内容：

```swift
import AVKit

VideoPlayer(player: AVPlayer(url: videoURL))
    .frame(height: 300)
```

可与远程视频 URL、本地资源、播放控制等配合使用。

## 📍 5. CoreLocation 定位服务

SwiftUI 可通过 CLLocationManager 与 Swift 的 ObservableObject 模式结合，获取用户位置信息。

```swift
class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    @Published var location: CLLocation?
}
```

可用于地图、天气、出行等应用场景。


## ✅ 小结

| 技术         | 用途                    | 推荐场景                   |
|--------------|-------------------------|----------------------------|
| Combine      | 响应式数据流            | 网络请求、表单输入联动等   |
| Core Data    | 持久化数据管理          | 老项目或复杂数据结构       |
| SwiftData    | 新一代持久化框架（推荐）| 新项目、轻量数据结构       |
| AVKit        | 视频播放与控制          | 教学、娱乐、多媒体内容     |
| CoreLocation | 用户定位与位置追踪      | 地图、LBS 应用             |

SwiftUI 的强大不止于构建界面，更体现在它与整个 Apple 原生生态的深度融合。