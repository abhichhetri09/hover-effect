declare global {
  interface Window {
    upez__cart_settings: any;
    state: {
      getSettingValue: (key: string) => any;
    };
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

  private getSettingValue(key: string, defaultValue?: any): any {
    if (window.state && typeof window.state.getSettingValue === "function") {
      return window.state.getSettingValue(key) ?? defaultValue;
    }
    return this.settings[key] ?? defaultValue;
  }

  private addHighlightStyle(): void {
    console.log("Adding highlight style");

    const style = document.createElement("style");
    style.textContent = `
      .${this.highlightClass} {
     outline: 2px solid red !important;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
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
      if (this.isElementRelatedToSetting(target)) {
        target.classList.add(this.highlightClass);
        console.log("Hovered element:", target);
        console.log("Related setting:", this.getRelatedSetting(target));
      }
    });

    document.body.addEventListener("mouseout", (event) => {
      const target = event.target as HTMLElement;
      target.classList.remove(this.highlightClass);
    });
  }

  private isElementRelatedToSetting(element: HTMLElement): boolean {
    const id = element.id;
    const classes = element.classList;
    const text = element.textContent?.trim();

    // Check for specific classes, IDs, or text content
    if (
      classes.contains("upez-btn--basic-button") ||
      classes.contains("upez-btn--blue") ||
      id === "upezCart" ||
      text === this.getSettingValue("__label_checkout") ||
      text === this.getSettingValue("__label_cart_empty")
    ) {
      return true;
    }

    // Check for elements related to shipping goals
    const shippingGoals = this.getSettingValue("shipping_goals", []);
    if (shippingGoals.length > 0) {
      for (const goal of shippingGoals) {
        if (
          text?.includes(goal.goal_label) ||
          text?.includes(goal.goal_value)
        ) {
          return true;
        }
      }
    }

    // Check for elements related to free gift
    const freeGiftSettings = this.getSettingValue(
      "free_gift_template__settings",
      {}
    );
    if (freeGiftSettings && text === freeGiftSettings.button_label) {
      return true;
    }

    return false;
  }

  private getRelatedSetting(element: HTMLElement): any {
    // Implement logic to determine which setting is related to the hovered element
    // This is a placeholder implementation
    return { settingName: "Example Setting", value: "Example Value" };
  }

  public init(): void {
    console.log("HoverEffect init started");
    this.addHoverListeners();
    console.log("Hover effect initialized");
  }
}
