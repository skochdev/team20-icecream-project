# 1 командный проект, который завершает модуль изучения HTML и CSS/SASS.

Группа из 9 рандомных человек за 5 дней совместной работы должны были сверстать и оформить
одностраничный лендинг для десктопа, таблетки и мобильных устройств. Адаптивная верстка. Без
кросс-браузерности. Использование Javascript для модальных окон.

Команда впервые столкнулась с принципами командной работы с Git (pull requests, branches, merges,
conflicts), сборщиком Parcel, и прочувствовала на себе все прелести командной работы. Столкнулись со
сложностями в организации, впервые коллективно принимали решения о распределении обязанностей,
планирование базовой структуры проекта, создание базовых стилей для переиспользования всеми членами
команды, ежедневные стендапы по SCRUM методологии, кучу кодинга, ошибок, трудностей и радости от
успешной защиты проекта перед менторами и коллегами из других подобных групп.

Помимо основного технического задания, были выполнены дополнительные задачи по созданию модальных
окон, применению анимации и переходов. Так же команда имплементировала Masonry Library для галерени изображений с дополнительной анимацией и интерактивный слайдер для отображение отзывов клиентов. Так же добавлены карты для удобного поиска представительств.

Мне посчастливилось быть своего рода тим лидом, где я на практике понял, как много опыта и знаний
нужно для ведения даже такого не слишком замысловатого проекта. Незабываемый опыт. Я благодарен всем
кто принимал участие и внес вклад в достижение этих результатов. Всем удачи

# Parcel boilerplate

## Скрытые файлы

Включите отображение скрытых файлов и папок в проводнике своей операционной системы, иначе вы не
сможете выбрать и скопировать себе файлы настроек проекта, имена которых начинаются с точки.

## Зависимости

На компьютере должена быть установлена LTS-версия [Node.js](https://nodejs.org/en/) со всеми
дополнительными инструментами кроме **Chocolatey** - его ставить не нужно.

## Перед началом работы

Один раз на проект установить все зависимости.

```shell
npm ci
```

### Разработка

Запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу [http://localhost:1234](http://localhost:1234).

### Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку
`gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша или принятого
пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле `homepage` и скрипт
`build`, заменив `имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

На всякий случай стоит зайти в настройки репозитория `Settings` > `Pages` и убедиться что продакшен
версии файлов раздаются из папки `/root` ветки `gh-pages`.

Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик просто копирует
  используемые изображения чтобы не нагружать систему оптимизацией картинок, так как на слабых
  компьютерах это может занять много времени.
