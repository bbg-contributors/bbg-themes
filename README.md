# bbg-themes

**此仓库只接受 v2 版本主题的提交**，如果你想要提交 v1 版本主题，请按照[此教程](https://bbg.nekomoe.xyz/#/zh-cn/developer-guide/thirdparty_theme)将你的主题迁移到 v2 版本。

## 提交你的主题

本仓库不直接存储主题文件，你需要自己提供主题的下载地址。

提交方法：打开`index.json`，然后在 theme_list 这一数组中添加这样一个对象：

```json
{
  "name": <String>,
  "intro": <String>,
  "download_url": <String>,
  "author": <String>,
  "author_url": <String>,
  "license": <String>,
  "last_tested_on_bbg_version": <Number>,
  "compatible_with_newer_bbg_version": <Boolean>,
  "compatible_with_older_bbg_version": <Boolean>,
  "is_example_theme": <Boolean>
}
```

其中，is_example_theme 是指该主题是否为示例主题，一般而言此项应当填写`false`。如果此项填写`true`，你的主题可能不会展现在最终用户的主题商店中。

更详细的信息请查阅schema.json。

现在，使用支持json-schema的编辑器编辑index.json时可以输入`""`并轻触回车键快速生成主题内容模板了。当前使用default键值取代只有vscode支持的defaultSnippets以保证兼容性（但是不得不取消了很多提示）。

你可以通过提交 Pull Request 来将你的主题信息提交到本仓库。
