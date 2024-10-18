declare global {
  interface Window {
    upez__cart_settings: any;
  }
}

export class HoverEffect {
  private highlightClass = "upez-highlight";
  private settings: any;

  constructor() {
    console.log("HoverEffect constructor called");
    this.settings = window.upez__cart_settings || {};
    this.addHighlightStyle();
  }

  private addHighlightStyle(): void {
    console.log("Adding highlight style");
    const primaryColor = this.settings.primary_color || "#3ECCEC";
    const style = document.createElement("style");
    style.textContent = `
      .${this.highlightClass} {
        outline: 5px solid red !important;
       
        transition: all 0.3s ease-in-out;
        position: relative;
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);
    console.log("Highlight style added");
  }

  private hexToRGBA(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  private addHoverListeners(): void {
    console.log("Adding hover listeners");
    document.body.addEventListener("mouseover", (event) => {
      const target = event.target as HTMLElement;
      if (this.shouldHighlight(target)) {
        target.classList.add(this.highlightClass);
      }
    });

    document.body.addEventListener("mouseout", (event) => {
      const target = event.target as HTMLElement;
      target.classList.remove(this.highlightClass);
    });
    console.log("Hover listeners added");
  }

  private shouldHighlight(element: HTMLElement): boolean {
    const classes = element.classList;
    const id = element.id;
    const text = element.textContent?.trim();

    // Check for specific classes, IDs, or text content
    if (
      classes.contains("upez-btn--basic-button") ||
      classes.contains("upez-btn--blue") ||
      id === "upezCart" ||
      text === this.settings.__label_checkout ||
      text === this.settings.__label_cart_empty
    ) {
      return true;
    }

    // Check for elements related to shipping goals
    if (this.settings.shipping_goals) {
      for (const goal of this.settings.shipping_goals) {
        if (
          text?.includes(goal.goal_label) ||
          text?.includes(goal.goal_value)
        ) {
          return true;
        }
      }
    }

    // Check for elements related to free gift
    if (this.settings.free_gift_template__settings) {
      if (text === this.settings.free_gift_template__settings.button_label) {
        return true;
      }
    }

    return false;
  }

  public init(): void {
    console.log("HoverEffect init started");
    this.addHoverListeners();
    console.log("Hover effect initialized");
  }
}
