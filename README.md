### Design System Tooltip With Custom Portal

PoC of Tooltip with custom portal.
Works with React 15+

It handle all of usages like:

```javascript
<TooltipWrapper content="some tooltip content">
    <li>
      li with <a href="">link Node trigger</a>
    </li>
</TooltipWrapper>
```

```javascript
<TooltipWrapper content="some content">
  <ButtonStateless>ComponentFunctional trigger</ButtonStateless>
</TooltipWrapper>
```

```javascript
<TooltipWrapper content="some content">
  <a href="">Node trigger</a>
</TooltipWrapper>
```

```javascript
<TooltipWrapper content="some content">
  <ButtonClass>ComponentClass trigger</ButtonClass>
</TooltipWrapper>
```
