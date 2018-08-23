# Bluzma
A set of Blaze components for Bulma

## Install
```
$ meteor add bluzma
```

## Usage

```html
<template name="test">
  {{> bluzmaTitle content="Titre" size=1}}
  {{#bluzmaColumns}}
    {{#bluzmaColumn desktopSize="1/2"}}
      First column
    {{/bluzmaColumn}}
  {{/bluzmaColumns}}
</template>
```

## Documentation
### Helpers
You can apply Bulma helper classes to any Bluzma component.

Attribut | Type | Values
-------- | -----|------------
clearfix | `Boolean` | `true`
pulled | `String` | `left` `right`
marginless | `Boolean` | `true`
paddingless | `Boolean` | `true`
overlay | `Boolean` | `true`
clipped | `Boolean` | `true`
radiusless | `Boolean` | `true`
shadowless | `Boolean` | `true`
unselectable | `Boolean` | `true`
invisible | `Boolean` | `true`
srOnly | `Boolean` | `true`
block | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
flex | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
inline | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
inlineBlock | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
inlineFlex | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
hidden | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textColor | `String` | `"white"` `"black"` `"light"` `"dark"` `"primary"` `"info"` `"link"` `"success"` `"warning"` `"danger"` `"blackBis"` `"blackTer"` `"greyDarker"` `"greyDark"` `"grey"` `"greyLight"` `"greyLighter"` `"whiteTer"` `"whiteBis"`
bgColor | `String` | `"white"` `"black"` `"light"` `"dark"` `"primary"` `"info"` `"link"` `"success"` `"warning"` `"danger"` `"blackBis"` `"blackTer"` `"greyDarker"` `"greyDark"` `"grey"` `"greyLight"` `"greyLighter"` `"whiteTer"` `"whiteBis"`
textSize1 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textSize2 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textSize3 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textSize4 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textSize5 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textSize6 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textSize7 | `Boolean`<br>`String` | `true`<br>`"mobile"` `"tabletOnly"` `"desktopOnly"` `"widescreenOnly"` `"touch"` `"tablet"` `"desktop"` `"widescreen"` `"fullhd"`
textCentered | `Boolean` | `true`
textJustified | `Boolean` | `true`
textLeft | `Boolean` | `true`
textRight | `Boolean` | `true`
capitalized | `Boolean` | `true`
lowercase | `Boolean` | `true`
uppercase | `Boolean` | `true`
italic | `Boolean` | `true`
textWeight | `String` | `"light"` `"normal"` `"semibold"` `"bold"`

### Grid
#### Columns & column
```html
  <template name="test">
    {{#bluzmaColumns centered=true}}
      {{#bluzmaColumn size="1/3"}}size="1/3"{{/bluzmaColumn}}
      {{#bluzmaColumn mobileSize=8}}mobileSize=8{{/bluzmaColumn}}
      {{#bluzmaColumn}}Third column{{/bluzmaColumn}}
    {{/bluzmaColumns}}
  </template>
```
#### Columns
Attribut | Type | Values
-------- | -----|------------
centered | `Boolean` | `true`
desktop | `Boolean` | `true`
gap | `Number` | `0` `1` ... `8`
gapless | `Boolean` | `true`
mobile | `Boolean` | `true`
multiline | `Boolean` | `true`
vCentered | `Boolean` | `true`
#### Column
Attribut | Type | Values
-------- | -----|------------
narrow | `Boolean` | `true`
offset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
size | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
mobileOffset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
mobileSize | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
tabletOffset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
tabletSize | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
touchOffset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
touchSize | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
desktopOffset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
desktopSize | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
widescreenOffset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
widescreenSize | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
fullhdOffset | `Number`<br>`String` | `0` `1` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`
fullhdSize | `Number`<br>`String` | `1` `2` ... `12`<br>`"1/2"` `"1/3"` `"2/3"` `"1/4"` `"3/4"` `"1/5"` `"2/5"` `"3/5"` `"4/5"` `full`

### Elements
#### Icon
Attribut | Type | Values
-------- | -----|------------
size | `String` | `"small"` `"medium"` `"large"`
icon | `String` | Example `"far fa-user"`
