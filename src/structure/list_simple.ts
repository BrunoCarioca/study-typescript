type Books = {
    title: string;
    price: number;
}

type list = {
    value: Books;
    next: list | null;
}

interface IList_Simple {
    add: (value: Books) => void;
    remove: (value: Books) => void;
    show: () => void;
    size: () => number;
    search: (value: Books) => number | list;
} 

export default class List_Simple implements IList_Simple {

    private list: list | null = null;
    
    public  isEmpty = () => this.list === null;

    public show = () => {
        if (this.isEmpty()) {
            console.log('A lista está vazia');
            return null;
        } else {
            let node = this.list;
            while (node !== null) {
                console.log(node.value);
                node = node.next;
            }
        }
    }

    public add = (value: Books) => {
        if (this.isEmpty()) { 
            this.list = { value, next: null };
            return;
        }

        let node = this.list;

        while (node?.next !== null) {
                node = node?.next ?? null;
        }

        node.next = { value, next: null };

        return;
    }

    public remove = (value: Books) => {
        if(this.isEmpty()) {
            console.log('A lista está vazia');
            return;
        }

        let node = this.list;
        
        if (node?.value === value) {
            this.list = node.next;
            return;
        }

        while (node?.next !== null) {
            if (node?.next.value === value) {
                node.next = node.next.next;
                return;
            }
            node = node?.next ?? null;
        }
    }

    public size = () => {
        if (this.isEmpty()) {
            return 0;
        }

        let node = this.list;
        let count = 0;

        while (node !== null) {
            count++;
            node = node.next;
        }

        return count;
    }

    public search = (value: Books) => {
        if (this.isEmpty()) {
            return -1;
        }

        let node = this.list;

        while (node !== null) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }

        return -1;
    }
}
