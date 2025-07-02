---
title: SwiftUI 布局系统详解
---

# SwiftUI 布局系统详解

## 1. 概述
SwiftUI 采用声明式语法构建用户界面，其布局系统基于以下核心原则：
- **组件组合**：通过嵌套视图构建复杂界面
- **自动适应**：根据设备和方向自动调整
- **尺寸协商**：父视图与子视图通过协商确定最终布局

## 2. 布局三阶段

### 2.1 父视图提案（Parent Proposal）
父视图向子视图提供可用空间：
```swift
struct ContentView: View {
    var body: some View {
        ChildView()
            .frame(width: 200, height: 100) // 提案：200x100
    }
}
```

### 2.2 子视图计算（Child Calculation）
子视图根据自身内容决定理想尺寸：
```swift
struct ChildView: View {
    var body: some View {
        Text("Hello") // 可能需要80x40
            .background(Color.yellow)
    }
}
```

### 2.3 父视图定位（Parent Positioning）
父视图根据子视图需求确定最终位置：
```swift
HStack {
    Text("Left")
    Text("Right") // 父视图HStack决定两个Text的排列位置
}
```

## 3. 常用布局修饰器

| 修饰器 | 作用 | 示例 |
|--------|------|-------|
| `.frame()` | 设置固定尺寸 | `.frame(width: 100, height: 50)` |
| `.padding()` | 添加内边距 | `.padding(.horizontal, 15)` |
| `.position()` | 绝对定位 | `.position(x: 100, y: 200)` |
| `.offset()` | 相对偏移 | `.offset(x: 10, y: -5)` |
| `.alignmentGuide()` | 自定义对齐 | `.alignmentGuide(.leading) { d in d[.trailing] }` |

## 4. 布局容器

### 4.1 堆栈布局
```swift
VStack(alignment: .leading, spacing: 10) {
    Text("Title").font(.title)
    Text("Subtitle")
}

HStack {
    Image(systemName: "star")
    Text("Favorited")
}

ZStack(alignment: .bottomTrailing) {
    Image("background")
    Text("Watermark")
}
```

### 4.2 网格布局
```swift
let columns = [GridItem(.flexible()), GridItem(.flexible())]

LazyVGrid(columns: columns, spacing: 20) {
    ForEach(0..<10) { index in
        CellView(index: index)
    }
}
```

## 5. 自定义布局
实现 `Layout` 协议创建自定义布局：

```swift
struct DiagonalLayout: Layout {
    func sizeThatFits(
        proposal: ProposedViewSize,
        subviews: Subviews,
        cache: inout ()
    ) -> CGSize {
        // 计算总尺寸
    }
    
    func placeSubviews(
        in bounds: CGRect,
        proposal: ProposedViewSize,
        subviews: Subviews,
        cache: inout ()
    ) {
        // 定位子视图
    }
}

// 使用示例
DiagonalLayout {
    Text("One")
    Text("Two")
    Text("Three")
}
```

## 6. 调试技巧

1. **边框调试**：
```swift
.background(Color.gray)
.border(Color.red, width: 1)
```

2. **控制台输出**：
```swift
.onAppear {
    print(geometry.size) // 打印实际尺寸
}
```

3. **尺寸报告**：
```swift
.overlay(
    GeometryReader { proxy in
        Text("\(Int(proxy.size.width))×\(Int(proxy.size.height))")
    }
)
```

## 7. 最佳实践

1. 优先使用系统提供的布局容器
2. 避免过度嵌套视图层次
3. 对于复杂界面考虑使用 `@ViewBuilder`
4. 在性能敏感场景使用 `Lazy` 系列视图
5. 利用 `GeometryReader` 谨慎处理动态布局

## 8. 总结

SwiftUI 的布局系统通过以下流程工作：
1. 父视图提出可用空间
2. 子视图返回理想尺寸
3. 父视图最终定位子视图

掌握这些原理可以帮助开发者构建灵活、自适应的用户界面。