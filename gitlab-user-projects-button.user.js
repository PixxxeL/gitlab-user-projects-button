// ==UserScript==
// @name         GitLab User Projects Button
// @name:ru      Кнопка проектов пользователя на Gitlab
// @description    Tampermonkey script that add link to user projects in top bar
// @description:ru Пользовательский скрипт Tampermonkey, который добавляет ссылку на проекты пользователя в верхнюю панель
// @namespace    https://pixel-tyumen.ru/
// @version      1.0.2
// @author       piksel@mail.ru
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQkUyRkMzQUM0NDUxMUYwQTk1M0I2Q0REMjk3QjU1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQkUyRkMzQkM0NDUxMUYwQTk1M0I2Q0REMjk3QjU1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCRTJGQzM4QzQ0NTExRjBBOTUzQjZDREQyOTdCNTUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCRTJGQzM5QzQ0NTExRjBBOTUzQjZDREQyOTdCNTUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WMX5HgAADeJJREFUeNrsXQmQHFUZ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
// @grant        none
// ==/UserScript==

const VERSION = '1.0.2'
const USER_PIC_SELECTOR = '.gl-new-dropdown-item-content[data-track-label=user_profile]'
const TARGET_CONTAINER_SELECTOR = '.top-bar-container:last-child' //.top-bar-fixed - parent

const init = () => {
    console.info(`Версия скрипта: ${VERSION}`)
    const domain = location.hostname.split('.')
    if (!domain.includes('gitlab') && !domain.includes('gl')) {
        console.info('Скрипт выполняется только на доменах, `gitlab` или `gl`.')
        return
    }
    const userPicNode = document.querySelector(USER_PIC_SELECTOR)
    if (!userPicNode) {
        console.info(`Нет DOM элемента \`${USER_PIC_SELECTOR}\` пользователя, ссылка не будет показана.`)
        return
    }
    const username = userPicNode.attributes.href?.value?.substr(1)
    if (!username) {
        console.info('Нет `username` пользователя, ссылка не будет показана.')
        return
    }
    const userLinkId = `${username}-user-project`
    if (userLinkId && !document.getElementById(userLinkId)) {
        target = document.querySelector(TARGET_CONTAINER_SELECTOR)
        if (!target) {
            console.info(`Отсутствует контейнер \`${TARGET_CONTAINER_SELECTOR}\` для размещения ссылки.`)
            return
        }
        linkContainer = document.createElement('div')
        linkContainer.id = userLinkId
        linkContainer.style.marginLeft = '10px'
        target.appendChild(linkContainer)
        link = document.createElement('a')
        link.href = `/users/${encodeURIComponent(username)}/projects`
        link.textContent = username
        //link.className = 'gl-button btn btn-sm btn-confirm'
        link.className = 'btn btn-sm btn-confirm'
        linkContainer.appendChild(link)
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    setTimeout(init, 1000)
}
