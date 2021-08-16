---
title: Markdown展示頁面
subtitle: 針對文章可撰寫內容格式做簡易示範
date: 2020-02-29 07:42:34
author: crs
game:
rule:
tags: ['網站相關']
---

## 檔案結構
```
  |- data
  |  `- author
  |       |- id9000.json
  |       `- ID.json
  `- game.json
  |
  `- posts
      |- id9000
      |   `- zelda.md
      `- ID
          |- rockmanX4.md
          `- pokemon-yellow-any-percent.md
```

在`data/author`資料夾新增自己的資訊，檔名ID可自行填寫，twitch id為必填，會從twitch拿你的大頭貼圖片。  
`game.json`為遊戲中文翻譯對照表。  
`posts/ID`資料夾的ID需與author底下的`ID.json`檔名相同。

## 文章設定
```
--
title: 文章標題
subtitle: 文章副標題
date: 2020-02-29 07:42:34
author: 作者id
game: 遊戲speedrun.com的id
rule: 透過產生器產生的speedrun規則
tags: [tag1, tag2]
---
```
[speedrun.com rule產生器](/speedrun-generator)  
game與rule設定好後會在文章最上方產生該rule的排行榜。  
文章的撰寫與twitch下方的個人區塊相同，使用的是**markdown**，但針對特殊插入內容做了額外調整。  

## 大標題

### 小標題

```
## 大標題

### 小標題
```
標題須從二級的`##`開始做使用，並會在文章右方產生錨點連結。

## 特殊markdown語法

特殊語法與標準markdown不同，僅在這個網站使用。

### 圖片的使用

![圖片敘述文字](https://i.imgur.com/3k7Uozc.png)

```
![圖片敘述文字](https://i.imgur.com/3k7Uozc.png)
```
需注意的是，與一般圖片markdown不同，會將文字敘述放置於圖片下方。

### Youtube

![Youtube敘述文字](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

```
![Youtube敘述文字](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

### Twitter

https://twitter.com/GamesDoneQuick/status/1216272330445422594

```
https://twitter.com/GamesDoneQuick/status/1216272330445422594
```
直接貼twitter連結會顯示推特內容

### TwitchVod

![VOD1敘述文字](https://www.twitch.tv/videos/555649997)

![VOD2敘述文字](https://www.twitch.tv/videos/555649997?t=6h48m34s)

```
![VOD1敘述文字](https://www.twitch.tv/videos/555649997)

![VOD2敘述文字](https://www.twitch.tv/videos/555649997?t=6h48m34s)
```

### Twitch Clips

![彩學來跟大家講幾句話](https://clips.twitch.tv/PlausibleArtsyChickpeaSpicyBoy)

![金塊](https://www.twitch.tv/tetristhegrandmaster3/clip/ImportantProudGnatSquadGoals)

```
![彩學來跟大家講幾句話](https://clips.twitch.tv/PlausibleArtsyChickpeaSpicyBoy)

![金塊](https://www.twitch.tv/tetristhegrandmaster3/clip/ImportantProudGnatSquadGoals)
```

## 一般markdown語法

一般markdown語法，更多請上[markdown語法說明](https://markdown.tw/)查詢。

### 引言

> 觀眾: 「ㄤㄤㄤㄤㄤㄤㄤㄤㄤ。」
>
> 骯包如果一顆餵不飽，那就餵兩顆。
>
> 2020.02.29

```
> 觀眾: 「ㄤㄤㄤㄤㄤㄤㄤㄤㄤ。」
>
> 骯包如果一顆餵不飽，那就餵兩顆。
>
> 2020.02.29
```

### 列表

*   選項1
*   選項2
*   選項3

```
*   選項1
*   選項2
*   選項3

+   選項1
+   選項2
+   選項3

-   選項1
-   選項2
-   選項3
```

1.  選項1
2.  選項2
3.  選項3

```
1.  選項1
2.  選項2
3.  選項3
```

### 斜/粗體


*single asterisks*

```
*single asterisks*

_single underscores_
```

**double asterisks**

```
**double asterisks**

__double underscores__
```
