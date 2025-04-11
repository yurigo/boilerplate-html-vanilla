# ding-dong

>[!NOTE]
🔔 Dedicado a todos aquellos que no vienen a clase 🔔

Ejercicio para practicar transiciones y animaciones CSS.


```css
#campana{
    transform-origin: 50% 5%;
    animation: dingdong var(--animation-duration) ease-in-out 0s alternate infinite;
}

@keyframes dingdong{
    0% {
        transform:rotate(45deg);
    }
    100%{
        transform:rotate(-45deg);
    }
}
```

```css
#badajo{
    animation: dongding 2s ease-in-out 0s alternate infinite;
}

@keyframes dongding {
    0%{
        left: 50px;
    }
    95%{
        left: -50px;
    }
    100%{
        left: -50px;
    }
}
```
