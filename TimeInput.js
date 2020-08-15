class TimeInput {
    constructor (parent, startMinutes, startSeconds) {
        let container = createSpan();
        container.parent(parent);

        let inputMinutes = createInput(String(startMinutes), 'number');
        inputMinutes.attribute('min', '0');
        inputMinutes.attribute('max', '9');
        inputMinutes.attribute('size', '2');
        inputMinutes.parent(container);

        let divider = createSpan(':');
        divider.parent(container);
      
        let inputSeconds = createInput(String(startSeconds), 'number');
        inputSeconds.attribute('min', '0');
        inputSeconds.attribute('max', '59');
        inputSeconds.attribute('size', '3');
        inputSeconds.parent(container);

        this.container = container;
        this.inputMinutes = inputMinutes;
        this.inputSeconds = inputSeconds;

        this.parent = this.container.parent;
        this.elt = this.container.elt;
    }

    // Minutes and seconds are exposed as numbers, but stored as strings internally
    minutes (newVal) {
        if (newVal === undefined) {
            return parseInt(this.inputMinutes.value());
        }
        this.inputMinutes.value(String(newVal));
    }

    seconds (newVal) {
        if (newVal === undefined) {
            return parseInt(this.inputSeconds.value());
        }
        this.inputSeconds.value(String(newVal));
    }
}