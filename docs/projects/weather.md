# ☁️ SwiftUI 实战项目：天气应用

本项目演示如何用 SwiftUI 构建一个简易的天气应用，涵盖网络请求、JSON 解析、数据绑定和动态界面更新。

## 🎯 项目目标

- 通过城市名称查询天气
- 显示温度、天气状况和图标
- 使用 `@State` 和异步网络请求更新 UI
- 展示基础错误处理和加载状态

## 🧱 数据模型

定义天气数据模型：

```swift
struct WeatherResponse: Codable {
    let name: String
    let main: Main
    let weather: [Weather]

    struct Main: Codable {
        let temp: Double
    }
    struct Weather: Codable {
        let description: String
        let icon: String
    }
}
```

## 🧠 状态管理

```swift
@State private var cityName: String = ""
@State private var weather: WeatherResponse?
@State private var isLoading = false
@State private var errorMessage: String?
```

## 🔎 查询天气函数

使用 OpenWeatherMap API（需注册获取 API Key）：

```swift
func fetchWeather() {
    guard !cityName.isEmpty else { return }
    isLoading = true
    errorMessage = nil

    let apiKey = "你的API_KEY"
    let urlString = "https://api.openweathermap.org/data/2.5/weather?q=\\(cityName)&appid=\\(apiKey)&units=metric&lang=zh_cn"
    guard let url = URL(string: urlString) else {
        errorMessage = "无效的URL"
        isLoading = false
        return
    }

    URLSession.shared.dataTask(with: url) { data, response, error in
        DispatchQueue.main.async {
            isLoading = false
            if let error = error {
                errorMessage = error.localizedDescription
                return
            }
            guard let data = data else {
                errorMessage = "未收到数据"
                return
            }
            do {
                let decoded = try JSONDecoder().decode(WeatherResponse.self, from: data)
                weather = decoded
            } catch {
                errorMessage = "解析失败"
            }
        }
    }.resume()
}
```

## 📱 主视图布局

```swift
VStack(spacing: 20) {
    TextField("输入城市名称", text: $cityName)
        .textFieldStyle(.roundedBorder)
        .padding()

    Button("查询天气") {
        fetchWeather()
    }
    .disabled(cityName.isEmpty)

    if isLoading {
        ProgressView("加载中...")
    } else if let weather = weather {
        VStack(spacing: 10) {
            Text(weather.name)
                .font(.title)
                .bold()
            Text("\\(Int(weather.main.temp))℃")
                .font(.system(size: 50))
            Text(weather.weather.first?.description.capitalized ?? "")
                .font(.headline)

            if let icon = weather.weather.first?.icon {
                let iconUrl = "https://openweathermap.org/img/wn/\\(icon)@2x.png"
                AsyncImage(url: URL(string: iconUrl)) { image in
                    image.resizable()
                } placeholder: {
                    ProgressView()
                }
                .frame(width: 100, height: 100)
            }
        }
        .padding()
    } else if let error = errorMessage {
        Text(error)
            .foregroundColor(.red)
    }
    Spacer()
}
.padding()
```

✅ 总结

该项目帮助你熟悉：
- SwiftUI 与异步网络请求结合
- 使用 Codable 解析 JSON 数据
- 动态界面更新与状态管理
- 处理加载状态和错误提示

你可以进一步扩展：
- 支持多城市切换
- 展示未来几天天气预报
- 美化界面，添加动画效果
- 集成 CoreLocation 实现自动定位天气查询

让你的天气应用更加实用与美观！