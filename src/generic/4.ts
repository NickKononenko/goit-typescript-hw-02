/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
  // Додайте інші властивості, які має містити об'єкт props
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
