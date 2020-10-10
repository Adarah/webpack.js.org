(self.webpackChunk=self.webpackChunk||[]).push([[5430],{5430:e=>{e.exports='<p>The <code>Compilation</code> module is used by the <code>Compiler</code> to create new compilations (or builds). A <code>compilation</code> instance has access to all modules and their dependencies (most of which are circular references). It is the literal compilation of all the modules in the dependency graph of an application. During the compilation phase, modules are loaded, sealed, optimized, chunked, hashed and restored.</p> <p>The <code>Compilation</code> class also extends <code>Tapable</code> and provides the following lifecycle hooks. They can be tapped the same way as compiler hooks:</p> <pre><code class="hljs language-js">compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>someHook<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>As with the <code>compiler</code>, <code>tapAsync</code> and <code>tapPromise</code> may also be available depending on the type of hook.</p> <h3 id="buildmodule"><code>buildModule</code><a href="#buildmodule" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Triggered before a module build has started, can be used to modify the module.</p> <ul> <li>Callback Parameters: <code>module</code></li> </ul> <pre><code class="hljs language-js">compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>buildModule<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'SourceMapDevToolModuleOptionsPlugin\'</span><span class="token punctuation">,</span>\n  <span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    module<span class="token punctuation">.</span>useSourceMap <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="rebuildmodule"><code>rebuildModule</code><a href="#rebuildmodule" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Fired before rebuilding a module.</p> <ul> <li>Callback Parameters: <code>module</code></li> </ul> <h3 id="failedmodule"><code>failedModule</code><a href="#failedmodule" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Run when a module build has failed.</p> <ul> <li>Callback Parameters: <code>module</code> <code>error</code></li> </ul> <h3 id="succeedmodule"><code>succeedModule</code><a href="#succeedmodule" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed when a module has been built successfully.</p> <ul> <li>Callback Parameters: <code>module</code></li> </ul> <h3 id="finishmodules"><code>finishModules</code><a href="#finishmodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <p>Called when all modules have been built without errors.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="finishrebuildingmodule"><code>finishRebuildingModule</code><a href="#finishrebuildingmodule" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed when a module has been rebuilt, in case of both success or with errors.</p> <ul> <li>Callback Parameters: <code>module</code></li> </ul> <h3 id="seal"><code>seal</code><a href="#seal" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Fired when the compilation stops accepting new modules.</p> <h3 id="unseal"><code>unseal</code><a href="#unseal" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Fired when a compilation begins accepting new modules.</p> <h3 id="optimizedependencies"><code>optimizeDependencies</code><a href="#optimizedependencies" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Fired at the beginning of dependency optimization.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="afteroptimizedependencies"><code>afterOptimizeDependencies</code><a href="#afteroptimizedependencies" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Fired after the dependency optimization.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="optimize"><code>optimize</code><a href="#optimize" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Triggered at the beginning of the optimization phase.</p> <h3 id="optimizemodules"><code>optimizeModules</code><a href="#optimizemodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called at the beginning of the module optimization phase. A plugin can tap into this hook to perform optimizations on modules.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="afteroptimizemodules"><code>afterOptimizeModules</code><a href="#afteroptimizemodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called after modules optimization has completed.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="optimizechunks"><code>optimizeChunks</code><a href="#optimizechunks" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called at the beginning of the chunk optimization phase. A plugin can tap into this hook to perform optimizations on chunks.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <h3 id="afteroptimizechunks"><code>afterOptimizeChunks</code><a href="#afteroptimizechunks" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Fired after chunk optimization has completed.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <h3 id="optimizetree"><code>optimizeTree</code><a href="#optimizetree" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <p>Called before optimizing the dependency tree. A plugin can tap into this hook to perform a dependency tree optimization.</p> <ul> <li>Callback Parameters: <code>chunks</code> <code>modules</code></li> </ul> <h3 id="afteroptimizetree"><code>afterOptimizeTree</code><a href="#afteroptimizetree" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called after the dependency tree optimization has completed with success.</p> <ul> <li>Callback Parameters: <code>chunks</code> <code>modules</code></li> </ul> <h3 id="optimizechunkmodules"><code>optimizeChunkModules</code><a href="#optimizechunkmodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called after the tree optimization, at the beginning of the chunk modules optimization. A plugin can tap into this hook to perform optimizations of chunk modules.</p> <ul> <li>Callback Parameters: <code>chunks</code> <code>modules</code></li> </ul> <h3 id="afteroptimizechunkmodules"><code>afterOptimizeChunkModules</code><a href="#afteroptimizechunkmodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called after the chunkmodules optimization has completed successfully.</p> <ul> <li>Callback Parameters: <code>chunks</code> <code>modules</code></li> </ul> <h3 id="shouldrecord"><code>shouldRecord</code><a href="#shouldrecord" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called to determine whether or not to store records. Returning anything <code>!== false</code> will prevent every other "record" hook from being executed (<a href="#record"><code>record</code></a>, <a href="#recordmodules"><code>recordModules</code></a>, <a href="#recordchunks"><code>recordChunks</code></a> and <a href="#recordhash"><code>recordHash</code></a>).</p> <h3 id="revivemodules"><code>reviveModules</code><a href="#revivemodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Restore module information from records.</p> <ul> <li>Callback Parameters: <code>modules</code> <code>records</code></li> </ul> <h3 id="beforemoduleids"><code>beforeModuleIds</code><a href="#beforemoduleids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed before assigning an <code>id</code> to each module.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="moduleids"><code>moduleIds</code><a href="#moduleids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called to assign an <code>id</code> to each module.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="optimizemoduleids"><code>optimizeModuleIds</code><a href="#optimizemoduleids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called at the beginning of the modules <code>id</code> optimization.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="afteroptimizemoduleids"><code>afterOptimizeModuleIds</code><a href="#afteroptimizemoduleids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called when the modules <code>id</code> optimization phase has completed.</p> <ul> <li>Callback Parameters: <code>modules</code></li> </ul> <h3 id="revivechunks"><code>reviveChunks</code><a href="#revivechunks" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Restore chunk information from records.</p> <ul> <li>Callback Parameters: <code>chunks</code> <code>records</code></li> </ul> <h3 id="beforechunkids"><code>beforeChunkIds</code><a href="#beforechunkids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed before assigning an <code>id</code> to each chunk.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <h3 id="optimizechunkids"><code>optimizeChunkIds</code><a href="#optimizechunkids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called at the beginning of the chunks <code>id</code> optimization phase.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <h3 id="afteroptimizechunkids"><code>afterOptimizeChunkIds</code><a href="#afteroptimizechunkids" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Triggered after chunk <code>id</code> optimization has finished.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <h3 id="recordmodules"><code>recordModules</code><a href="#recordmodules" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Store module info to the records. This is triggered if <a href="#shouldrecord"><code>shouldRecord</code></a> returns a truthy value.</p> <ul> <li>Callback Parameters: <code>modules</code> <code>records</code></li> </ul> <h3 id="recordchunks"><code>recordChunks</code><a href="#recordchunks" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Store chunk info to the records. This is only triggered if <a href="#shouldrecord"><code>shouldRecord</code></a> returns a truthy value.</p> <ul> <li>Callback Parameters: <code>chunks</code> <code>records</code></li> </ul> <h3 id="beforehash"><code>beforeHash</code><a href="#beforehash" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called before the compilation is hashed.</p> <h3 id="afterhash"><code>afterHash</code><a href="#afterhash" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called after the compilation is hashed.</p> <h3 id="recordhash"><code>recordHash</code><a href="#recordhash" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Store information about record hash to the <code>records</code>. This is only triggered if <a href="#shouldrecord"><code>shouldRecord</code></a> returns a truthy value.</p> <ul> <li>Callback Parameters: <code>records</code></li> </ul> <h3 id="record"><code>record</code><a href="#record" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Store information about the <code>compilation</code> to the <code>records</code>. This is only triggered if <a href="#shouldrecord"><code>shouldRecord</code></a> returns a truthy value.</p> <ul> <li>Callback Parameters: <code>compilation</code> <code>records</code></li> </ul> <h3 id="beforemoduleassets"><code>beforeModuleAssets</code><a href="#beforemoduleassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed before module assets creation.</p> <h3 id="additionalchunkassets"><code>additionalChunkAssets</code><a href="#additionalchunkassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <blockquote class="warning"> <p><code>additionalChunkAssets</code> is deprecated (use the <a href="#processassets">Compilation.hook.processAssets</a> instead and use one of the Compilation.PROCESS<em>ASSETS_STAGE</em>* as a stage option)</p> </blockquote> <p>Create additional assets for the chunks.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <h3 id="shouldgeneratechunkassets"><code>shouldGenerateChunkAssets</code><a href="#shouldgeneratechunkassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called to determine whether or not generate chunks assets. Returning anything <code>!== false</code> will allow chunk assets generation.</p> <h3 id="beforechunkassets"><code>beforeChunkAssets</code><a href="#beforechunkassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed before creating the chunks assets.</p> <h3 id="additionalassets"><code>additionalAssets</code><a href="#additionalassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <p>Create additional assets for the compilation. This hook can be used to download an image, for example:</p> <pre><code class="hljs language-js">compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>additionalAssets<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token parameter">callback</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">download</span><span class="token punctuation">(</span><span class="token string">\'https://img.shields.io/npm/v/webpack.svg\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">\'webpack-version.svg\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toAsset</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'[webpack-example-plugin] Unable to download the image\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="optimizechunkassets"><code>optimizeChunkAssets</code><a href="#optimizechunkassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <blockquote class="warning"> <p><code>optimizeChunkAssets</code> is deprecated (use the <a href="#processassets">Compilation.hook.processAssets</a> instead and use one of the Compilation.PROCESS<em>ASSETS_STAGE</em>* as a stage option)</p> </blockquote> <p>Optimize any chunk assets. The assets are stored in <code>compilation.assets</code>. A <code>Chunk</code> has a property <code>files</code> which points to all files created by a chunk. Any additional chunk assets are stored in <code>compilation.additionalChunkAssets</code>.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <p>Here\'s an example that simply adds a banner to each chunk.</p> <pre><code class="hljs language-js">compilation<span class="token punctuation">.</span>hooks\n  <span class="token punctuation">.</span>optimizeChunkAssets\n  <span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunks<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    chunks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">chunk</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      chunk<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcatSource</span><span class="token punctuation">(</span>\n          <span class="token string">\'\\/**Sweet Banner**\\/\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'\\n\'</span><span class="token punctuation">,</span>\n          compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>file<span class="token punctuation">]</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="afteroptimizechunkassets"><code>afterOptimizeChunkAssets</code><a href="#afteroptimizechunkassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <blockquote class="warning"> <p><code>afterOptimizeChunkAssets</code> is deprecated (use the <a href="#processassets">Compilation.hook.processAssets</a> instead and use one of the Compilation.PROCESS<em>ASSETS_STAGE</em>* as a stage option)</p> </blockquote> <p>The chunk assets have been optimized.</p> <ul> <li>Callback Parameters: <code>chunks</code></li> </ul> <p>Here\'s an example plugin from <a href="https://github.com/boopathi">@boopathi</a> that outputs exactly what went into each chunk.</p> <pre><code class="hljs language-js">compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>afterOptimizeChunkAssets<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token parameter">chunks</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  chunks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">chunk</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      id<span class="token operator">:</span> chunk<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n      name<span class="token operator">:</span> chunk<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n      includes<span class="token operator">:</span> chunk<span class="token punctuation">.</span><span class="token function">getModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> module<span class="token punctuation">.</span>request<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="optimizeassets"><code>optimizeAssets</code><a href="#optimizeassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <p>Optimize all assets stored in <code>compilation.assets</code>.</p> <ul> <li>Callback Parameters: <code>assets</code></li> </ul> <h3 id="afteroptimizeassets"><code>afterOptimizeAssets</code><a href="#afteroptimizeassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>The assets have been optimized.</p> <ul> <li>Callback Parameters: <code>assets</code></li> </ul> <h3 id="processassets"><code>processAssets</code><a href="#processassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <p>Asset processing.</p> <ul> <li>Callback Parameters: <code>assets</code></li> </ul> <p>Here\'s an example:</p> <pre><code class="hljs language-js">compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>processAssets<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span>\n    stage<span class="token operator">:</span> Compilation<span class="token punctuation">.</span><span class="token constant">PROCESS_ASSETS_STAGE_ADDITIONS</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token parameter">assets</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// code here</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>There\'re many stages to use:</p> <ul> <li><code>PROCESS_ASSETS_STAGE_ADDITIONAL</code> - Add additional assets to the compilation.</li> <li><code>PROCESS_ASSETS_STAGE_PRE_PROCESS</code> - Basic preprocessing of the assets.</li> <li><code>PROCESS_ASSETS_STAGE_DERIVED</code> - Derive new assets from the existing assets.</li> <li><code>PROCESS_ASSETS_STAGE_ADDITIONS</code> - Add additional sections to the existing assets e.g. banner or initialization code.</li> <li><code>PROCESS_ASSETS_STAGE_OPTIMIZE</code> - Optimize existing assets in a general way.</li> <li><code>PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT</code> - Optimize the count of existing assets, e.g. by merging them.</li> <li><code>PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY</code> - Optimize the compatibility of existing assets, e.g. add polyfills or vendor prefixes.</li> <li><code>PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE</code> - Optimize the size of existing assets, e.g. by minimizing or omitting whitespace.</li> <li><code>PROCESS_ASSETS_STAGE_SUMMARIZE</code> - Summarize the list of existing assets.</li> <li><code>PROCESS_ASSETS_STAGE_DEV_TOOLING</code> - Add development tooling to the assets, e.g. by extracting a source map.</li> <li><code>PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER</code> - Optimize the transfer of existing assets, e.g. by preparing a compressed (gzip) file as separate asset.</li> <li><code>PROCESS_ASSETS_STAGE_ANALYSE</code> - Analyze the existing assets.</li> <li><code>PROCESS_ASSETS_STAGE_REPORT</code> - Creating assets for the reporting purposes.</li> </ul> <h3 id="afterprocessassets"><code>afterProcessAssets</code><a href="#afterprocessassets" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called after the <a href="#processassets"><code>processAssets</code></a> hook had finished without error.</p> <h3 id="needadditionalseal"><code>needAdditionalSeal</code><a href="#needadditionalseal" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called to determine if the compilation needs to be unsealed to include other files.</p> <h3 id="afterseal"><code>afterSeal</code><a href="#afterseal" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>AsyncSeriesHook</code></p> <p>Executed right after <code>needAdditionalSeal</code>.</p> <h3 id="chunkhash"><code>chunkHash</code><a href="#chunkhash" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Triggered to emit the hash for each chunk.</p> <ul> <li>Callback Parameters: <code>chunk</code> <code>chunkHash</code></li> </ul> <h3 id="moduleasset"><code>moduleAsset</code><a href="#moduleasset" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Called when an asset from a module was added to the compilation.</p> <ul> <li>Callback Parameters: <code>module</code> <code>filename</code></li> </ul> <h3 id="chunkasset"><code>chunkAsset</code><a href="#chunkasset" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Triggered when an asset from a chunk was added to the compilation.</p> <ul> <li>Callback Parameters: <code>chunk</code> <code>filename</code></li> </ul> <h3 id="assetpath"><code>assetPath</code><a href="#assetpath" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncWaterfallHook</code></p> <p>Called to determine the path of an asset.</p> <ul> <li>Callback Parameters: <code>path</code> <code>options</code></li> </ul> <h3 id="needadditionalpass"><code>needAdditionalPass</code><a href="#needadditionalpass" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncBailHook</code></p> <p>Called to determine if an asset needs to be processed further after being emitted.</p> <h3 id="childcompiler"><code>childCompiler</code><a href="#childcompiler" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><code>SyncHook</code></p> <p>Executed after setting up a child compiler.</p> <ul> <li>Callback Parameters: <code>childCompiler</code> <code>compilerName</code> <code>compilerIndex</code></li> </ul> <h3 id="normalmoduleloader"><code>normalModuleLoader</code><a href="#normalmoduleloader" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p>Since webpack v5 <code>normalModuleLoader</code> hook was removed. Now to access the loader use <code>NormalModule.getCompilationHooks(compilation).loader</code> instead.</p> '}}]);