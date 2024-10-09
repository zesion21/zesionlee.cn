---
date: 2024-10-09
tags:
  - css
---

# css filter 属性

### filter 属性

`filter` 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染

### filter 值

```css
/* <filter-function> 值 */
filter: blur(5px); /*高斯模糊*/
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);
```

- blur() 将高斯模糊应用于输入图像。

```css
filter: blur(5px);
```

- brightness() 将线性乘法器应用于输入图像，以调整其亮度。值为 `0%`将创建全黑图像；值为 `100%` 会使输入保持不变，其他值是该效果的线性乘数。如果值大于 `100%`将使图像更加明亮。

```css
filter: brightness(2);
```

- contrast() 调整输入图像的对比度。

- drop-shadow() 使用 `<shadow>` 参数沿图像的轮廓生成阴影效果

- grayscale() 将图像转换为灰度图。值为 `100%` 则完全转为灰度图像，若为初始值 `0%` 则图像无变化

- hue-rotate() 应用色相旋转。

```css
filter: hue-rotate(90deg);
```

- invert() 反转输入图像。

- opacity() 应用透明度。

- saturate() 改变图像饱和度。

- sepia() 将图像转换为深褐色。
