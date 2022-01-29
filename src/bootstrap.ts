(async () => {
  /**
   * @title Test injecting importing statements via plugin
   * This line will be replaced by `vite-alter-importing-statements` plugin,
   * Please look at the `vite.config.ts` for details.
   * Vite will try reload application and the console reports:
   * @example
   *     [vite] new dependencies found: @pixi/constants, @pixi/core, @pixi/display, @pixi/graphics, @pixi/loaders, @pixi/interaction, @pixi/math, @pixi/runner, @pixi/sprite, @pixi/text, @pixi/ticker, @pixi/settings, updating...
   *     [vite] ✨ dependencies updated, reloading page...
   */
  // const modules: Array<any> = await Promise.all([]);

  /**
   * @title Test manually write down importing statements without plugin
   * This part won't trigger `vite-alter-importing-statements` plugin,
   * Vite will startup fast without application reloading and reporting:
   * @example
   *     [vite] new dependencies found: @pixi/constants, @pixi/core, @pixi/display, @pixi/graphics, @pixi/loaders, @pixi/interaction, @pixi/math, @pixi/runner, @pixi/sprite, @pixi/text, @pixi/ticker, @pixi/settings, updating...
   *     [vite] ✨ dependencies updated, reloading page...
   */
  const modules: Array<any> = await Promise.all([
    import('./pixi'),
  ])

  console.log({
    modules
  })
})()
  