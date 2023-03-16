type QNode<T> = {
  value: T,
  next?: QNode<T>,
};

export default class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  addToQueue(element: T): void {
    const node = {value: element} as QNode<T>;
    if (!this.tail) {
      this.tail = this.head = node;
    }
    
    this.length++;
    this.tail.next = node;
    this.tail = node;
  };

  removeFromQueue(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const head = this.head;
    this.head = this.head.next;

    // Not required due to garbage collection but still good to have
    head.next = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  };
}