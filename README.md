# react-gpt-ads
A React components for Google Publisher Tag

## Requirements
| Module      | Version     |
| ----------- | ----------- |
| React       | 16.8.0      |
| React DOM   | 16.8.0      |

## Installation
Install the library using your favorite package manager:
```js
    npm install react-gpt-ads
```
or using:
```js
    yarn add react-gpt-ads
```

## Getting Started

- First add the gpt script
```js
    import { GptScript } from react-gpt-ads
    <head>
        <GptScript />
    </head>
```
or using:
```js
    <head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    </head>
```

- Add the Gpt component for define ad slot
```js
    import { Gpt } from react-gpt-ads
    
    <Gpt 
        adUnit="network-code/ad-unit"
        name="ad-name"
        size={[300, 250]}
    />
```

## Gpt Props

#### adUnit
- **type:** string
- **required:** true

Ad unit path loaded from google ad manager

#### name
- **type:** string
- **required:** true

Name used in id in div

#### size
- **type:** SingleSize | MultiSize | FluidSize | ResponsiveSize
- **required:** true

**SingleSize:** [number, number]
**MultiSize:** Array<[number, number]>
**FluidSize:** 'fluid'
**Responsive:** Array<[ [number, number], Array<[number, number]> ]>

Size define if is the single, multi, fluid or responsive size.
