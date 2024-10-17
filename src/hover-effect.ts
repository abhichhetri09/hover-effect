declare global {
  interface Window {
    builderState: any;
  }
}

interface TemplateSetting {
  id: string;
  value?: any;
  default?: any;
}

export class HoverEffect {
  private highlightClass = "upez-highlight";
  private builderStateKey: string | null = null;
  private builderStateObserver: MutationObserver | null = null;

  constructor() {
    console.log("HoverEffect constructor called");
    this.addHighlightStyle();
  }

  private addHighlightStyle(): void {
    console.log("Adding highlight style");
    const style = document.createElement("style");
    style.textContent = `
      .${this.highlightClass} {
        outline: 5px solid red !important;
        background-color:  !important;
        transition: all 0.3s ease-in-out;
        position: relative;
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);
    console.log("Highlight style added");
  }

  private getTemplateSettings(): TemplateSetting[] {
    if (!this.builderStateKey || !window.builderState) return [];
    return window.builderState[this.builderStateKey]?.[0]?.data?.settings || [];
  }

  private findSettingByValue(value: string): TemplateSetting | undefined {
    const settings = this.getTemplateSettings();
    console.log("Searching for setting with value:", value);
    console.log("Available settings:", settings);
    return settings.find((setting) => {
      const match =
        String(setting.value) === value || String(setting.default) === value;
      if (match) console.log("Matched setting:", setting);
      return match;
    });
  }

  private addHoverListeners(): void {
    console.log("Adding hover listeners");
    document.body.addEventListener("mouseover", (event) => {
      const target = event.target as HTMLElement;
      console.log("Mouseover event on:", target.tagName, target.textContent);
      const setting = this.findSettingForElement(target);

      target.classList.add(this.highlightClass);
      if (setting) {
        console.log("Template Setting found:", setting);
      } else {
        console.log("No template setting found for this element");
      }
    });

    document.body.addEventListener("mouseout", (event) => {
      const target = event.target as HTMLElement;
      target.classList.remove(this.highlightClass);
    });
    console.log("Hover listeners added");
  }

  private findSettingForElement(
    element: HTMLElement
  ): TemplateSetting | undefined {
    const text = element.textContent?.trim();
    console.log("Searching for setting with text:", text);
    if (text) {
      return this.findSettingByValue(text);
    }
    return undefined;
  }

  public async init(): Promise<void> {
    console.log("HoverEffect init started");
    try {
      await this.waitForBuilderState();
      this.addHoverListeners();
      console.log("Hover effect initialized");
    } catch (error) {
      console.error("Error in init method:", error);
    } finally {
      if (this.builderStateObserver) {
        this.builderStateObserver.disconnect();
      }
    }
  }

  private waitForBuilderState(): Promise<void> {
    return new Promise((resolve) => {
      if (window.builderState && Object.keys(window.builderState).length > 0) {
        this.initBuilderStateKey();
        resolve();
      } else {
        this.builderStateObserver = new MutationObserver(() => {
          if (
            window.builderState &&
            Object.keys(window.builderState).length > 0
          ) {
            this.initBuilderStateKey();
            resolve();
            this.builderStateObserver!.disconnect();
          }
        });

        this.builderStateObserver.observe(document, {
          attributes: true,
          childList: true,
          subtree: true,
        });

        setTimeout(() => {
          console.warn(
            "builderState not set after 10 seconds, continuing initialization"
          );
          resolve();
        }, 10000);
      }
    });
  }

  private initBuilderStateKey(): void {
    if (window.builderState) {
      const keys = Object.keys(window.builderState);
      if (keys.length > 0) {
        this.builderStateKey = keys[0];
        console.log("builderStateKey initialized:", this.builderStateKey);
      } else {
        console.warn("builderState is empty");
      }
    } else {
      console.warn("builderState is not defined");
    }
  }
}
