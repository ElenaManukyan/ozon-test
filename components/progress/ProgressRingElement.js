export class ProgressRingElement {
    constructor(containerForRing) {
        this.containerForRing = containerForRing;
        this.currentValue = 0;
        this.radiusProgress = 52;
        this.lengthProgress = 2 * Math.PI * this.radiusProgress;

        this._init();
    }

    _init() {
        this.containerForRing.innerHTML = `
            <div class="progressElement">
                <svg class="loadRingContainer" width="120" height="120">
                    <circle class="circleAll" cx="60" cy="60" r="${this.radiusProgress}"></circle>
                    <circle class="circleFilled" cx="60" cy="60" r="${this.radiusProgress}"></circle>
                </svg>
            </div>
        `;

        this.ring = this.containerForRing.querySelector('.loadRingContainer') || null;
        this.circle = this.containerForRing.querySelector('.circleFilled') || null;

        if (this.circle) {
            this.circle.style.strokeDasharray = `${this.lengthProgress} ${this.lengthProgress}`;
        }

        this.setValue(0);
    }

    setValue(percent) {
        let validatedPercent = parseFloat(percent);
        if (Number.isNaN(validatedPercent) || validatedPercent < 0) validatedPercent = 0;
        if (validatedPercent > 100) validatedPercent = 100;

        this.currentValue = validatedPercent;
        const offset = this.lengthProgress - (this.currentValue / 100 * this.lengthProgress);
        this.circle.style.strokeDashoffset = offset;
    }

    switchAnimated(state) {
        this.ring.classList.toggle('animated', state);
    }

    switchHidden(state) {
        this.ring.classList.toggle('hidden', state);
    }
}