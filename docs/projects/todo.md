# 📝 SwiftUI 实战项目：待办事项应用

本项目将带你使用 SwiftUI 构建一个简单但完整的待办事项应用（To-Do App），涵盖数据绑定、列表展示、状态管理、持久化存储等核心技术点。

## 🎯 项目目标

- 添加/删除/标记待办事项
- 使用 `@State` 管理任务列表
- 利用 `List` 展示任务
- 实现数据本地持久化（可选：UserDefaults、SwiftData）

## 🧱 数据模型

```swift
struct TodoItem: Identifiable, Codable {
    var id = UUID()
    var title: String
    var isDone: Bool = false
}
```

## 🧠 状态管理

```swift
@State private var items: [TodoItem] = []
@State private var newTask: String = ""
```

## 💡 添加任务输入框

```swift
HStack {
    TextField("请输入新任务", text: $newTask)
        .textFieldStyle(.roundedBorder)
    Button(action: addTask) {
        Image(systemName: "plus.circle.fill")
            .foregroundColor(.blue)
            .font(.title2)
    }
}
.padding()
```

## 📋 展示任务列表

```swift
List {
    ForEach(items) { item in
        HStack {
            Image(systemName: item.isDone ? "checkmark.circle.fill" : "circle")
                .onTapGesture {
                    toggleTask(item)
                }
            Text(item.title)
                .strikethrough(item.isDone)
        }
    }
    .onDelete(perform: deleteTask)
}
```

## 🧩 功能函数

```swift
func addTask() {
    guard !newTask.isEmpty else { return }
    let newItem = TodoItem(title: newTask)
    items.append(newItem)
    newTask = ""
}

func toggleTask(_ item: TodoItem) {
    if let index = items.firstIndex(where: { $0.id == item.id }) {
        items[index].isDone.toggle()
    }
}

func deleteTask(at offsets: IndexSet) {
    items.remove(atOffsets: offsets)
}
```

## 💾 可选：本地持久化（UserDefaults 示例）

```swift
func saveItems() {
    if let data = try? JSONEncoder().encode(items) {
        UserDefaults.standard.set(data, forKey: "TodoItems")
    }
}

func loadItems() {
    if let data = UserDefaults.standard.data(forKey: "TodoItems"),
       let decoded = try? JSONDecoder().decode([TodoItem].self, from: data) {
        items = decoded
    }
}
```

在 onAppear 中加载数据：

```swift
.onAppear {
    loadItems()
}
```

## ✅ 总结

这个项目演示了如何使用 SwiftUI 构建一个具备基础功能的待办事项应用。通过它，你将掌握：
	•	SwiftUI 数据绑定与事件响应
	•	使用 List 构建可交互的列表
	•	状态管理与界面更新
	•	简单的数据持久化方案

下一步可以尝试：
	•	使用 SwiftData 替代 UserDefaults
	•	添加任务分类、日期、提醒功能
	•	引入动画与主题切换

让你的 To-Do 应用变得更完整、更实用！