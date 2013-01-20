  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>js-bson/lib/bson/long.js at master · mongodb/js-bson · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="wCB1xaoiV5ucySuqIMtyZCedPr5R5lmMU7SajIN+WPs=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-b6e4a9de2a215d2d19f092cdbe4739e525ed6061.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-9d67d355fef80aa4aa95e9a29207dfcb3f237cb9.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-cc4895cbb610429d2ce48e7c2392822c33db2dfe.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-25250eebf4383186fbf0739210d6b5cef03891c9.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/mongodb/js-bson/blob/4a320e66094f05b7d05e5f269b80205b24676f7f/lib/bson/long.js'>
    <meta property="og:title" content="js-bson"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mongodb/js-bson"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/c17ac52a9e94e768c4fab0ce37065841?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="BSON Parser for node and browser. Contribute to js-bson development by creating an account on GitHub."/>

    <meta name="description" content="BSON Parser for node and browser. Contribute to js-bson development by creating an account on GitHub." />

  <link href="https://github.com/mongodb/js-bson/commits/master.atom" rel="alternate" title="Recent Commits to js-bson:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659561" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659561" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fmongodb%2Fjs-bson%2Fblob%2Fmaster%2Flib%2Fbson%2Flong.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">


          <li>
            <span class="star-button"><a href="/login?return_to=%2Fmongodb%2Fjs-bson" class="minibutton js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow"><span class="mini-icon mini-icon-star"></span>Star</a><a class="social-count js-social-count" href="/mongodb/js-bson/stargazers">35</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Fmongodb%2Fjs-bson" class="minibutton js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/mongodb/js-bson/network" class="social-count">20</a>
          </li>
    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/mongodb" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">mongodb</span>
                  </a></span> /
                <strong><a href="/mongodb/js-bson" class="js-current-repository">js-bson</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/mongodb/js-bson" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mongodb/js-bson/network" highlight="repo_network">Network</a></li>
    <li><a href="/mongodb/js-bson/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/mongodb/js-bson/issues" highlight="repo_issues">Issues <span class='counter'>5</span></a></li>



    <li><a href="/mongodb/js-bson/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/mongodb/js-bson/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">7</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-filter="branches" class="js-select-menu-tab selected">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list js-filter-tab js-filter-branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">



              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>

                    <a href="/mongodb/js-bson/blob/master/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="master" rel="nofollow">master</a>

              </div> <!-- /.select-menu-item -->


              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list js-filter-tab js-filter-tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring" style="display:none;">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.1.4/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.1.4" rel="nofollow">V0.1.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.1.2/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.1.2" rel="nofollow">V0.1.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.1.0/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.1.0" rel="nofollow">V0.1.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.0.9/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.0.9" rel="nofollow">V0.0.9</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.0.8/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.0.8" rel="nofollow">V0.0.8</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.0.6/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.0.6" rel="nofollow">V0.0.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mongodb/js-bson/blob/V0.0.5/lib/bson/long.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="V0.0.5" rel="nofollow">V0.0.5</a>

              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mongodb/js-bson" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mongodb/js-bson/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mongodb/js-bson/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e31b6adce7e826d31a2cdbea8f4a42a4 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:e31b6adce7e826d31a2cdbea8f4a42a4 -->

<div id="slider">


    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
      <div class="breadcrumb">
        <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mongodb/js-bson" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">js-bson</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mongodb/js-bson/tree/master/lib" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">lib</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mongodb/js-bson/tree/master/lib/bson" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">bson</span></a></span> / <strong class="final-path">long.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="lib/bson/long.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
      </div>

      <a href="/mongodb/js-bson/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a132807512f576d8b2394a7a8b0379a0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/christkv" rel="author">christkv</a></span>
    <time class="js-relative-date" datetime="2012-10-09T03:17:39-07:00" title="2012-10-09 03:17:39">October 09, 2012</time>
    <div class="commit-title">
        <a href="/mongodb/js-bson/commit/80649f1d2e078e2693c9ceceb3415ec6569e33b8" class="message">removed windows references</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="christkv" href="/mongodb/js-bson/commits/master/lib/bson/long.js?author=christkv"><img height="20" src="https://secure.gravatar.com/avatar/a132807512f576d8b2394a7a8b0379a0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jstewmon" href="/mongodb/js-bson/commits/master/lib/bson/long.js?author=jstewmon"><img height="20" src="https://secure.gravatar.com/avatar/30bf4c7d5bda50be1b94578b5c046e88?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a132807512f576d8b2394a7a8b0379a0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/christkv">christkv</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/30bf4c7d5bda50be1b94578b5c046e88?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jstewmon">jstewmon</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/mongodb/js-bson/blob/4a320e66094f05b7d05e5f269b80205b24676f7f/lib/bson/long.js" data-title="js-bson/lib/bson/long.js at master · mongodb/js-bson · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>854 lines (769 sloc)</span>
                <span>23.082 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                      <a class="grouped-button minibutton bigger lighter js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  </li>
                <li><a href="/mongodb/js-bson/raw/master/lib/bson/long.js" class="button minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/mongodb/js-bson/blame/master/lib/bson/long.js" class="button minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/mongodb/js-bson/commits/master/lib/bson/long.js" class="button minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></div><div class='line' id='LC2'><span class="c1">// you may not use this file except in compliance with the License.</span></div><div class='line' id='LC3'><span class="c1">// You may obtain a copy of the License at</span></div><div class='line' id='LC4'><span class="c1">//</span></div><div class='line' id='LC5'><span class="c1">//     http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC6'><span class="c1">//</span></div><div class='line' id='LC7'><span class="c1">// Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC8'><span class="c1">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></div><div class='line' id='LC9'><span class="c1">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div><div class='line' id='LC10'><span class="c1">// See the License for the specific language governing permissions and</span></div><div class='line' id='LC11'><span class="c1">// limitations under the License.</span></div><div class='line' id='LC12'><span class="c1">//</span></div><div class='line' id='LC13'><span class="c1">// Copyright 2009 Google Inc. All Rights Reserved</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="cm">/**</span></div><div class='line' id='LC16'><span class="cm"> * Defines a Long class for representing a 64-bit two&#39;s-complement</span></div><div class='line' id='LC17'><span class="cm"> * integer value, which faithfully simulates the behavior of a Java &quot;Long&quot;. This</span></div><div class='line' id='LC18'><span class="cm"> * implementation is derived from LongLib in GWT.</span></div><div class='line' id='LC19'><span class="cm"> *</span></div><div class='line' id='LC20'><span class="cm"> * Constructs a 64-bit two&#39;s-complement integer, given its low and high 32-bit</span></div><div class='line' id='LC21'><span class="cm"> * values as *signed* integers.  See the from* functions below for more</span></div><div class='line' id='LC22'><span class="cm"> * convenient ways of constructing Longs.</span></div><div class='line' id='LC23'><span class="cm"> *</span></div><div class='line' id='LC24'><span class="cm"> * The internal representation of a Long is the two given signed, 32-bit values.</span></div><div class='line' id='LC25'><span class="cm"> * We use 32-bit pieces because these are the size of integers on which</span></div><div class='line' id='LC26'><span class="cm"> * Javascript performs bit-operations.  For operations like addition and</span></div><div class='line' id='LC27'><span class="cm"> * multiplication, we split each number into 16-bit pieces, which can easily be</span></div><div class='line' id='LC28'><span class="cm"> * multiplied within Javascript&#39;s floating-point representation without overflow</span></div><div class='line' id='LC29'><span class="cm"> * or change in sign.</span></div><div class='line' id='LC30'><span class="cm"> *</span></div><div class='line' id='LC31'><span class="cm"> * In the algorithms below, we frequently reduce the negative case to the</span></div><div class='line' id='LC32'><span class="cm"> * positive case by negating the input(s) and then post-processing the result.</span></div><div class='line' id='LC33'><span class="cm"> * Note that we must ALWAYS check specially whether those values are MIN_VALUE</span></div><div class='line' id='LC34'><span class="cm"> * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as</span></div><div class='line' id='LC35'><span class="cm"> * a positive number, it overflows back into a negative).  Not handling this</span></div><div class='line' id='LC36'><span class="cm"> * case would often result in infinite recursion.</span></div><div class='line' id='LC37'><span class="cm"> *</span></div><div class='line' id='LC38'><span class="cm"> * @class Represents the BSON Long type.</span></div><div class='line' id='LC39'><span class="cm"> * @param {Number} low  the low (signed) 32 bits of the Long.</span></div><div class='line' id='LC40'><span class="cm"> * @param {Number} high the high (signed) 32 bits of the Long.</span></div><div class='line' id='LC41'><span class="cm"> */</span></div><div class='line' id='LC42'><span class="kd">function</span> <span class="nx">Long</span><span class="p">(</span><span class="nx">low</span><span class="p">,</span> <span class="nx">high</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">Long</span><span class="p">))</span> <span class="k">return</span> <span class="k">new</span> <span class="nx">Long</span><span class="p">(</span><span class="nx">low</span><span class="p">,</span> <span class="nx">high</span><span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;</div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_bsontype</span> <span class="o">=</span> <span class="s1">&#39;Long&#39;</span><span class="p">;</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC47'><span class="cm">   * @type {number}</span></div><div class='line' id='LC48'><span class="cm">   * @api private</span></div><div class='line' id='LC49'><span class="cm">   */</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">=</span> <span class="nx">low</span> <span class="o">|</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// force into 32 signed bits.</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC53'><span class="cm">   * @type {number}</span></div><div class='line' id='LC54'><span class="cm">   * @api private</span></div><div class='line' id='LC55'><span class="cm">   */</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">=</span> <span class="nx">high</span> <span class="o">|</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// force into 32 signed bits.</span></div><div class='line' id='LC57'><span class="p">};</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'><span class="cm">/**</span></div><div class='line' id='LC60'><span class="cm"> * Return the int value.</span></div><div class='line' id='LC61'><span class="cm"> *</span></div><div class='line' id='LC62'><span class="cm"> * @return {Number} the value, assuming it is a 32-bit integer.</span></div><div class='line' id='LC63'><span class="cm"> * @api public</span></div><div class='line' id='LC64'><span class="cm"> */</span></div><div class='line' id='LC65'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toInt</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC67'><span class="p">};</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="cm">/**</span></div><div class='line' id='LC70'><span class="cm"> * Return the Number value.</span></div><div class='line' id='LC71'><span class="cm"> *</span></div><div class='line' id='LC72'><span class="cm"> * @return {Number} the closest floating-point representation to this value.</span></div><div class='line' id='LC73'><span class="cm"> * @api public</span></div><div class='line' id='LC74'><span class="cm"> */</span></div><div class='line' id='LC75'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toNumber</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">*</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span> <span class="o">+</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getLowBitsUnsigned</span><span class="p">();</span></div><div class='line' id='LC78'><span class="p">};</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="cm">/**</span></div><div class='line' id='LC81'><span class="cm"> * Return the JSON value.</span></div><div class='line' id='LC82'><span class="cm"> *</span></div><div class='line' id='LC83'><span class="cm"> * @return {String} the JSON representation.</span></div><div class='line' id='LC84'><span class="cm"> * @api public</span></div><div class='line' id='LC85'><span class="cm"> */</span></div><div class='line' id='LC86'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC88'><span class="p">}</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'><span class="cm">/**</span></div><div class='line' id='LC91'><span class="cm"> * Return the String value.</span></div><div class='line' id='LC92'><span class="cm"> *</span></div><div class='line' id='LC93'><span class="cm"> * @param {Number} [opt_radix] the radix in which the text should be written.</span></div><div class='line' id='LC94'><span class="cm"> * @return {String} the textual representation of this value.</span></div><div class='line' id='LC95'><span class="cm"> * @api public</span></div><div class='line' id='LC96'><span class="cm"> */</span></div><div class='line' id='LC97'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opt_radix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">radix</span> <span class="o">=</span> <span class="nx">opt_radix</span> <span class="o">||</span> <span class="mi">10</span><span class="p">;</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">radix</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">||</span> <span class="mi">36</span> <span class="o">&lt;</span> <span class="nx">radix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;radix out of range: &#39;</span> <span class="o">+</span> <span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;0&#39;</span><span class="p">;</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// We need to change the Long value before it can be negated, so we remove</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the bottom-most digit in this base and then recurse to do the rest.</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">radixLong</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">div</span><span class="p">(</span><span class="nx">radixLong</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rem</span> <span class="o">=</span> <span class="nx">div</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">radixLong</span><span class="p">).</span><span class="nx">subtract</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">div</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="nx">radix</span><span class="p">)</span> <span class="o">+</span> <span class="nx">rem</span><span class="p">.</span><span class="nx">toInt</span><span class="p">().</span><span class="nx">toString</span><span class="p">(</span><span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span><span class="p">().</span><span class="nx">toString</span><span class="p">(</span><span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>&nbsp;&nbsp;<span class="c1">// Do several (6) digits each time through the loop, so as to</span></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="c1">// minimize the calls to the very expensive emulated div.</span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">radixToPower</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">radix</span><span class="p">,</span> <span class="mi">6</span><span class="p">));</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rem</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">remDiv</span> <span class="o">=</span> <span class="nx">rem</span><span class="p">.</span><span class="nx">div</span><span class="p">(</span><span class="nx">radixToPower</span><span class="p">);</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">intval</span> <span class="o">=</span> <span class="nx">rem</span><span class="p">.</span><span class="nx">subtract</span><span class="p">(</span><span class="nx">remDiv</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">radixToPower</span><span class="p">)).</span><span class="nx">toInt</span><span class="p">();</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">digits</span> <span class="o">=</span> <span class="nx">intval</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rem</span> <span class="o">=</span> <span class="nx">remDiv</span><span class="p">;</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">rem</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">digits</span> <span class="o">+</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">digits</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">6</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">digits</span> <span class="o">=</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">digits</span><span class="p">;</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">digits</span> <span class="o">+</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC141'><span class="p">};</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'><span class="cm">/**</span></div><div class='line' id='LC144'><span class="cm"> * Return the high 32-bits value.</span></div><div class='line' id='LC145'><span class="cm"> *</span></div><div class='line' id='LC146'><span class="cm"> * @return {Number} the high 32-bits as a signed value.</span></div><div class='line' id='LC147'><span class="cm"> * @api public</span></div><div class='line' id='LC148'><span class="cm"> */</span></div><div class='line' id='LC149'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getHighBits</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span><span class="p">;</span></div><div class='line' id='LC151'><span class="p">};</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'><span class="cm">/**</span></div><div class='line' id='LC154'><span class="cm"> * Return the low 32-bits value.</span></div><div class='line' id='LC155'><span class="cm"> *</span></div><div class='line' id='LC156'><span class="cm"> * @return {Number} the low 32-bits as a signed value.</span></div><div class='line' id='LC157'><span class="cm"> * @api public</span></div><div class='line' id='LC158'><span class="cm"> */</span></div><div class='line' id='LC159'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getLowBits</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC160'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC161'><span class="p">};</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'><span class="cm">/**</span></div><div class='line' id='LC164'><span class="cm"> * Return the low unsigned 32-bits value.</span></div><div class='line' id='LC165'><span class="cm"> *</span></div><div class='line' id='LC166'><span class="cm"> * @return {Number} the low 32-bits as an unsigned value.</span></div><div class='line' id='LC167'><span class="cm"> * @api public</span></div><div class='line' id='LC168'><span class="cm"> */</span></div><div class='line' id='LC169'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getLowBitsUnsigned</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">:</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC172'><span class="p">};</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><span class="cm">/**</span></div><div class='line' id='LC175'><span class="cm"> * Returns the number of bits needed to represent the absolute value of this Long.</span></div><div class='line' id='LC176'><span class="cm"> *</span></div><div class='line' id='LC177'><span class="cm"> * @return {Number} Returns the number of bits needed to represent the absolute value of this Long.</span></div><div class='line' id='LC178'><span class="cm"> * @api public</span></div><div class='line' id='LC179'><span class="cm"> */</span></div><div class='line' id='LC180'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getNumBitsAbs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">64</span><span class="p">;</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span><span class="p">().</span><span class="nx">getNumBitsAbs</span><span class="p">();</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC187'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">!=</span> <span class="mi">0</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">bit</span> <span class="o">=</span> <span class="mi">31</span><span class="p">;</span> <span class="nx">bit</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bit</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">val</span> <span class="o">&amp;</span> <span class="p">(</span><span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="nx">bit</span><span class="p">))</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">!=</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">bit</span> <span class="o">+</span> <span class="mi">33</span> <span class="o">:</span> <span class="nx">bit</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC195'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC196'><span class="p">};</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'><span class="cm">/**</span></div><div class='line' id='LC199'><span class="cm"> * Return whether this value is zero.</span></div><div class='line' id='LC200'><span class="cm"> *</span></div><div class='line' id='LC201'><span class="cm"> * @return {Boolean} whether this value is zero.</span></div><div class='line' id='LC202'><span class="cm"> * @api public</span></div><div class='line' id='LC203'><span class="cm"> */</span></div><div class='line' id='LC204'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isZero</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC206'><span class="p">};</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'><span class="cm">/**</span></div><div class='line' id='LC209'><span class="cm"> * Return whether this value is negative.</span></div><div class='line' id='LC210'><span class="cm"> *</span></div><div class='line' id='LC211'><span class="cm"> * @return {Boolean} whether this value is negative.</span></div><div class='line' id='LC212'><span class="cm"> * @api public</span></div><div class='line' id='LC213'><span class="cm"> */</span></div><div class='line' id='LC214'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isNegative</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC216'><span class="p">};</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'><span class="cm">/**</span></div><div class='line' id='LC219'><span class="cm"> * Return whether this value is odd.</span></div><div class='line' id='LC220'><span class="cm"> *</span></div><div class='line' id='LC221'><span class="cm"> * @return {Boolean} whether this value is odd.</span></div><div class='line' id='LC222'><span class="cm"> * @api public</span></div><div class='line' id='LC223'><span class="cm"> */</span></div><div class='line' id='LC224'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isOdd</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&amp;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC226'><span class="p">};</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><span class="cm">/**</span></div><div class='line' id='LC229'><span class="cm"> * Return whether this Long equals the other</span></div><div class='line' id='LC230'><span class="cm"> *</span></div><div class='line' id='LC231'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC232'><span class="cm"> * @return {Boolean} whether this Long equals the other</span></div><div class='line' id='LC233'><span class="cm"> * @api public</span></div><div class='line' id='LC234'><span class="cm"> */</span></div><div class='line' id='LC235'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">equals</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">==</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">==</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span><span class="p">);</span></div><div class='line' id='LC237'><span class="p">};</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'><span class="cm">/**</span></div><div class='line' id='LC240'><span class="cm"> * Return whether this Long does not equal the other.</span></div><div class='line' id='LC241'><span class="cm"> *</span></div><div class='line' id='LC242'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC243'><span class="cm"> * @return {Boolean} whether this Long does not equal the other.</span></div><div class='line' id='LC244'><span class="cm"> * @api public</span></div><div class='line' id='LC245'><span class="cm"> */</span></div><div class='line' id='LC246'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">notEquals</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC247'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">!=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">!=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span><span class="p">);</span></div><div class='line' id='LC248'><span class="p">};</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'><span class="cm">/**</span></div><div class='line' id='LC251'><span class="cm"> * Return whether this Long is less than the other.</span></div><div class='line' id='LC252'><span class="cm"> *</span></div><div class='line' id='LC253'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC254'><span class="cm"> * @return {Boolean} whether this Long is less than the other.</span></div><div class='line' id='LC255'><span class="cm"> * @api public</span></div><div class='line' id='LC256'><span class="cm"> */</span></div><div class='line' id='LC257'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">lessThan</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">compare</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC259'><span class="p">};</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'><span class="cm">/**</span></div><div class='line' id='LC262'><span class="cm"> * Return whether this Long is less than or equal to the other.</span></div><div class='line' id='LC263'><span class="cm"> *</span></div><div class='line' id='LC264'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC265'><span class="cm"> * @return {Boolean} whether this Long is less than or equal to the other.</span></div><div class='line' id='LC266'><span class="cm"> * @api public</span></div><div class='line' id='LC267'><span class="cm"> */</span></div><div class='line' id='LC268'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">lessThanOrEqual</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">compare</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC270'><span class="p">};</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'><span class="cm">/**</span></div><div class='line' id='LC273'><span class="cm"> * Return whether this Long is greater than the other.</span></div><div class='line' id='LC274'><span class="cm"> *</span></div><div class='line' id='LC275'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC276'><span class="cm"> * @return {Boolean} whether this Long is greater than the other.</span></div><div class='line' id='LC277'><span class="cm"> * @api public</span></div><div class='line' id='LC278'><span class="cm"> */</span></div><div class='line' id='LC279'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">greaterThan</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC280'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">compare</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC281'><span class="p">};</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'><span class="cm">/**</span></div><div class='line' id='LC284'><span class="cm"> * Return whether this Long is greater than or equal to the other.</span></div><div class='line' id='LC285'><span class="cm"> *</span></div><div class='line' id='LC286'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC287'><span class="cm"> * @return {Boolean} whether this Long is greater than or equal to the other.</span></div><div class='line' id='LC288'><span class="cm"> * @api public</span></div><div class='line' id='LC289'><span class="cm"> */</span></div><div class='line' id='LC290'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">greaterThanOrEqual</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">compare</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC292'><span class="p">};</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'><span class="cm">/**</span></div><div class='line' id='LC295'><span class="cm"> * Compares this Long with the given one.</span></div><div class='line' id='LC296'><span class="cm"> *</span></div><div class='line' id='LC297'><span class="cm"> * @param {Long} other Long to compare against.</span></div><div class='line' id='LC298'><span class="cm"> * @return {Boolean} 0 if they are the same, 1 if the this is greater, and -1 if the given one is greater.</span></div><div class='line' id='LC299'><span class="cm"> * @api public</span></div><div class='line' id='LC300'><span class="cm"> */</span></div><div class='line' id='LC301'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">compare</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">other</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC304'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">thisNeg</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">();</span></div><div class='line' id='LC307'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">otherNeg</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">();</span></div><div class='line' id='LC308'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">thisNeg</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">otherNeg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC311'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">thisNeg</span> <span class="o">&amp;&amp;</span> <span class="nx">otherNeg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC313'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="c1">// at this point, the signs are the same, so subtraction will not overflow</span></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">subtract</span><span class="p">(</span><span class="nx">other</span><span class="p">).</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC320'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC321'><span class="p">};</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'><span class="cm">/**</span></div><div class='line' id='LC324'><span class="cm"> * The negation of this value.</span></div><div class='line' id='LC325'><span class="cm"> *</span></div><div class='line' id='LC326'><span class="cm"> * @return {Long} the negation of this value.</span></div><div class='line' id='LC327'><span class="cm"> * @api public</span></div><div class='line' id='LC328'><span class="cm"> */</span></div><div class='line' id='LC329'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">negate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC330'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">;</span></div><div class='line' id='LC332'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">not</span><span class="p">().</span><span class="nx">add</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">ONE</span><span class="p">);</span></div><div class='line' id='LC334'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC335'><span class="p">};</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'><span class="cm">/**</span></div><div class='line' id='LC338'><span class="cm"> * Returns the sum of this and the given Long.</span></div><div class='line' id='LC339'><span class="cm"> *</span></div><div class='line' id='LC340'><span class="cm"> * @param {Long} other Long to add to this one.</span></div><div class='line' id='LC341'><span class="cm"> * @return {Long} the sum of this and the given Long.</span></div><div class='line' id='LC342'><span class="cm"> * @api public</span></div><div class='line' id='LC343'><span class="cm"> */</span></div><div class='line' id='LC344'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>&nbsp;&nbsp;<span class="c1">// Divide each number into 4 chunks of 16 bits, and then sum the chunks.</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a48</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC348'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a32</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC349'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a16</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC350'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a00</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC351'><br/></div><div class='line' id='LC352'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b48</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC353'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b32</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC354'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b16</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC355'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b00</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c48</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">c32</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">c16</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">c00</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC358'>&nbsp;&nbsp;<span class="nx">c00</span> <span class="o">+=</span> <span class="nx">a00</span> <span class="o">+</span> <span class="nx">b00</span><span class="p">;</span></div><div class='line' id='LC359'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">+=</span> <span class="nx">c00</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC360'>&nbsp;&nbsp;<span class="nx">c00</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">+=</span> <span class="nx">a16</span> <span class="o">+</span> <span class="nx">b16</span><span class="p">;</span></div><div class='line' id='LC362'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">c16</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC363'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC364'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">a32</span> <span class="o">+</span> <span class="nx">b32</span><span class="p">;</span></div><div class='line' id='LC365'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">+=</span> <span class="nx">c32</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC366'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC367'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">+=</span> <span class="nx">a48</span> <span class="o">+</span> <span class="nx">b48</span><span class="p">;</span></div><div class='line' id='LC368'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC369'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">((</span><span class="nx">c16</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="nx">c00</span><span class="p">,</span> <span class="p">(</span><span class="nx">c48</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="nx">c32</span><span class="p">);</span></div><div class='line' id='LC370'><span class="p">};</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'><span class="cm">/**</span></div><div class='line' id='LC373'><span class="cm"> * Returns the difference of this and the given Long.</span></div><div class='line' id='LC374'><span class="cm"> *</span></div><div class='line' id='LC375'><span class="cm"> * @param {Long} other Long to subtract from this.</span></div><div class='line' id='LC376'><span class="cm"> * @return {Long} the difference of this and the given Long.</span></div><div class='line' id='LC377'><span class="cm"> * @api public</span></div><div class='line' id='LC378'><span class="cm"> */</span></div><div class='line' id='LC379'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subtract</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">negate</span><span class="p">());</span></div><div class='line' id='LC381'><span class="p">};</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'><span class="cm">/**</span></div><div class='line' id='LC384'><span class="cm"> * Returns the product of this and the given Long.</span></div><div class='line' id='LC385'><span class="cm"> *</span></div><div class='line' id='LC386'><span class="cm"> * @param {Long} other Long to multiply with this.</span></div><div class='line' id='LC387'><span class="cm"> * @return {Long} the product of this and the other.</span></div><div class='line' id='LC388'><span class="cm"> * @api public</span></div><div class='line' id='LC389'><span class="cm"> */</span></div><div class='line' id='LC390'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">multiply</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC391'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC393'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC395'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">other</span><span class="p">.</span><span class="nx">isOdd</span><span class="p">()</span> <span class="o">?</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span> <span class="o">:</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC399'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isOdd</span><span class="p">()</span> <span class="o">?</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span> <span class="o">:</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC401'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span><span class="p">().</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">negate</span><span class="p">());</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span><span class="p">().</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">other</span><span class="p">).</span><span class="nx">negate</span><span class="p">();</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">negate</span><span class="p">()).</span><span class="nx">negate</span><span class="p">();</span></div><div class='line' id='LC411'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC412'><br/></div><div class='line' id='LC413'>&nbsp;&nbsp;<span class="c1">// If both Longs are small, use float multiplication</span></div><div class='line' id='LC414'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">lessThan</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_24_</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">other</span><span class="p">.</span><span class="nx">lessThan</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_24_</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">toNumber</span><span class="p">()</span> <span class="o">*</span> <span class="nx">other</span><span class="p">.</span><span class="nx">toNumber</span><span class="p">());</span></div><div class='line' id='LC417'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC418'><br/></div><div class='line' id='LC419'>&nbsp;&nbsp;<span class="c1">// Divide each Long into 4 chunks of 16 bits, and then add up 4x4 products.</span></div><div class='line' id='LC420'>&nbsp;&nbsp;<span class="c1">// We can skip products that would overflow.</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a48</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a32</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC424'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a16</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC425'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a00</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b48</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC428'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b32</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b16</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC430'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b00</span> <span class="o">=</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c48</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">c32</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">c16</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">c00</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC433'>&nbsp;&nbsp;<span class="nx">c00</span> <span class="o">+=</span> <span class="nx">a00</span> <span class="o">*</span> <span class="nx">b00</span><span class="p">;</span></div><div class='line' id='LC434'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">+=</span> <span class="nx">c00</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC435'>&nbsp;&nbsp;<span class="nx">c00</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC436'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">+=</span> <span class="nx">a16</span> <span class="o">*</span> <span class="nx">b00</span><span class="p">;</span></div><div class='line' id='LC437'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">c16</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC438'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC439'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">+=</span> <span class="nx">a00</span> <span class="o">*</span> <span class="nx">b16</span><span class="p">;</span></div><div class='line' id='LC440'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">c16</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC441'>&nbsp;&nbsp;<span class="nx">c16</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC442'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">a32</span> <span class="o">*</span> <span class="nx">b00</span><span class="p">;</span></div><div class='line' id='LC443'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">+=</span> <span class="nx">c32</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC444'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC445'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">a16</span> <span class="o">*</span> <span class="nx">b16</span><span class="p">;</span></div><div class='line' id='LC446'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">+=</span> <span class="nx">c32</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC447'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC448'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">+=</span> <span class="nx">a00</span> <span class="o">*</span> <span class="nx">b32</span><span class="p">;</span></div><div class='line' id='LC449'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">+=</span> <span class="nx">c32</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC450'>&nbsp;&nbsp;<span class="nx">c32</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC451'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">+=</span> <span class="nx">a48</span> <span class="o">*</span> <span class="nx">b00</span> <span class="o">+</span> <span class="nx">a32</span> <span class="o">*</span> <span class="nx">b16</span> <span class="o">+</span> <span class="nx">a16</span> <span class="o">*</span> <span class="nx">b32</span> <span class="o">+</span> <span class="nx">a00</span> <span class="o">*</span> <span class="nx">b48</span><span class="p">;</span></div><div class='line' id='LC452'>&nbsp;&nbsp;<span class="nx">c48</span> <span class="o">&amp;=</span> <span class="mh">0xFFFF</span><span class="p">;</span></div><div class='line' id='LC453'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">((</span><span class="nx">c16</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="nx">c00</span><span class="p">,</span> <span class="p">(</span><span class="nx">c48</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="nx">c32</span><span class="p">);</span></div><div class='line' id='LC454'><span class="p">};</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'><span class="cm">/**</span></div><div class='line' id='LC457'><span class="cm"> * Returns this Long divided by the given one.</span></div><div class='line' id='LC458'><span class="cm"> *</span></div><div class='line' id='LC459'><span class="cm"> * @param {Long} other Long by which to divide.</span></div><div class='line' id='LC460'><span class="cm"> * @return {Long} this Long divided by the given one.</span></div><div class='line' id='LC461'><span class="cm"> * @api public</span></div><div class='line' id='LC462'><span class="cm"> */</span></div><div class='line' id='LC463'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">div</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC464'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;division by zero&#39;</span><span class="p">);</span></div><div class='line' id='LC466'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC468'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">ONE</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">other</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">NEG_ONE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">;</span>  <span class="c1">// recall that -MIN_VALUE == MIN_VALUE</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ONE</span><span class="p">;</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// At this point, we have |other| &gt;= 2, so |this/other| &lt; |MIN_VALUE|.</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">halfThis</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">shiftRight</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">approx</span> <span class="o">=</span> <span class="nx">halfThis</span><span class="p">.</span><span class="nx">div</span><span class="p">(</span><span class="nx">other</span><span class="p">).</span><span class="nx">shiftLeft</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">approx</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">other</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">()</span> <span class="o">?</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ONE</span> <span class="o">:</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">NEG_ONE</span><span class="p">;</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">subtract</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">approx</span><span class="p">));</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">approx</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">rem</span><span class="p">.</span><span class="nx">div</span><span class="p">(</span><span class="nx">other</span><span class="p">));</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC488'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC490'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span><span class="p">().</span><span class="nx">div</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">negate</span><span class="p">());</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span><span class="p">().</span><span class="nx">div</span><span class="p">(</span><span class="nx">other</span><span class="p">).</span><span class="nx">negate</span><span class="p">();</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC498'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">div</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">negate</span><span class="p">()).</span><span class="nx">negate</span><span class="p">();</span></div><div class='line' id='LC500'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC501'><br/></div><div class='line' id='LC502'>&nbsp;&nbsp;<span class="c1">// Repeat the following until the remainder is less than other:  find a</span></div><div class='line' id='LC503'>&nbsp;&nbsp;<span class="c1">// floating-point that approximates remainder / other *from below*, add this</span></div><div class='line' id='LC504'>&nbsp;&nbsp;<span class="c1">// into the result, and subtract it from the remainder.  It is critical that</span></div><div class='line' id='LC505'>&nbsp;&nbsp;<span class="c1">// the approximate value is less than or equal to the real value so that the</span></div><div class='line' id='LC506'>&nbsp;&nbsp;<span class="c1">// remainder never becomes negative.</span></div><div class='line' id='LC507'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">res</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC508'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rem</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC509'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">rem</span><span class="p">.</span><span class="nx">greaterThanOrEqual</span><span class="p">(</span><span class="nx">other</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Approximate the result of division. This may be a little greater or</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// smaller than the actual value.</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">approx</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">rem</span><span class="p">.</span><span class="nx">toNumber</span><span class="p">()</span> <span class="o">/</span> <span class="nx">other</span><span class="p">.</span><span class="nx">toNumber</span><span class="p">()));</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// We will tweak the approximate result by changing it in the 48-th digit or</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the smallest non-fractional digit, whichever is larger.</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">log2</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">approx</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">LN2</span><span class="p">);</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">delta</span> <span class="o">=</span> <span class="p">(</span><span class="nx">log2</span> <span class="o">&lt;=</span> <span class="mi">48</span><span class="p">)</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="nx">log2</span> <span class="o">-</span> <span class="mi">48</span><span class="p">);</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Decrease the approximation until it is smaller than the remainder.  Note</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// that if it is too large, the product overflows and is negative.</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">approxRes</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nx">approx</span><span class="p">);</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">approxRem</span> <span class="o">=</span> <span class="nx">approxRes</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">other</span><span class="p">);</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">approxRem</span><span class="p">.</span><span class="nx">isNegative</span><span class="p">()</span> <span class="o">||</span> <span class="nx">approxRem</span><span class="p">.</span><span class="nx">greaterThan</span><span class="p">(</span><span class="nx">rem</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">approx</span> <span class="o">-=</span> <span class="nx">delta</span><span class="p">;</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">approxRes</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nx">approx</span><span class="p">);</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">approxRem</span> <span class="o">=</span> <span class="nx">approxRes</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">other</span><span class="p">);</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// We know the answer can&#39;t be zero... and actually, zero would cause</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// infinite recursion since we would make no progress.</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">approxRes</span><span class="p">.</span><span class="nx">isZero</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">approxRes</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ONE</span><span class="p">;</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC534'><br/></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span> <span class="o">=</span> <span class="nx">res</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">approxRes</span><span class="p">);</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rem</span> <span class="o">=</span> <span class="nx">rem</span><span class="p">.</span><span class="nx">subtract</span><span class="p">(</span><span class="nx">approxRem</span><span class="p">);</span></div><div class='line' id='LC537'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC538'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">res</span><span class="p">;</span></div><div class='line' id='LC539'><span class="p">};</span></div><div class='line' id='LC540'><br/></div><div class='line' id='LC541'><span class="cm">/**</span></div><div class='line' id='LC542'><span class="cm"> * Returns this Long modulo the given one.</span></div><div class='line' id='LC543'><span class="cm"> *</span></div><div class='line' id='LC544'><span class="cm"> * @param {Long} other Long by which to mod.</span></div><div class='line' id='LC545'><span class="cm"> * @return {Long} this Long modulo the given one.</span></div><div class='line' id='LC546'><span class="cm"> * @api public</span></div><div class='line' id='LC547'><span class="cm"> */</span></div><div class='line' id='LC548'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">modulo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC549'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">subtract</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">div</span><span class="p">(</span><span class="nx">other</span><span class="p">).</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">other</span><span class="p">));</span></div><div class='line' id='LC550'><span class="p">};</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'><span class="cm">/**</span></div><div class='line' id='LC553'><span class="cm"> * The bitwise-NOT of this value.</span></div><div class='line' id='LC554'><span class="cm"> *</span></div><div class='line' id='LC555'><span class="cm"> * @return {Long} the bitwise-NOT of this value.</span></div><div class='line' id='LC556'><span class="cm"> * @api public</span></div><div class='line' id='LC557'><span class="cm"> */</span></div><div class='line' id='LC558'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">not</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC559'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="o">~</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">,</span> <span class="o">~</span><span class="k">this</span><span class="p">.</span><span class="nx">high_</span><span class="p">);</span></div><div class='line' id='LC560'><span class="p">};</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'><span class="cm">/**</span></div><div class='line' id='LC563'><span class="cm"> * Returns the bitwise-AND of this Long and the given one.</span></div><div class='line' id='LC564'><span class="cm"> *</span></div><div class='line' id='LC565'><span class="cm"> * @param {Long} other the Long with which to AND.</span></div><div class='line' id='LC566'><span class="cm"> * @return {Long} the bitwise-AND of this and the other.</span></div><div class='line' id='LC567'><span class="cm"> * @api public</span></div><div class='line' id='LC568'><span class="cm"> */</span></div><div class='line' id='LC569'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">and</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC570'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">&amp;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">&amp;</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span><span class="p">);</span></div><div class='line' id='LC571'><span class="p">};</span></div><div class='line' id='LC572'><br/></div><div class='line' id='LC573'><span class="cm">/**</span></div><div class='line' id='LC574'><span class="cm"> * Returns the bitwise-OR of this Long and the given one.</span></div><div class='line' id='LC575'><span class="cm"> *</span></div><div class='line' id='LC576'><span class="cm"> * @param {Long} other the Long with which to OR.</span></div><div class='line' id='LC577'><span class="cm"> * @return {Long} the bitwise-OR of this and the other.</span></div><div class='line' id='LC578'><span class="cm"> * @api public</span></div><div class='line' id='LC579'><span class="cm"> */</span></div><div class='line' id='LC580'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">or</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC581'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">|</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">|</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span><span class="p">);</span></div><div class='line' id='LC582'><span class="p">};</span></div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'><span class="cm">/**</span></div><div class='line' id='LC585'><span class="cm"> * Returns the bitwise-XOR of this Long and the given one.</span></div><div class='line' id='LC586'><span class="cm"> *</span></div><div class='line' id='LC587'><span class="cm"> * @param {Long} other the Long with which to XOR.</span></div><div class='line' id='LC588'><span class="cm"> * @return {Long} the bitwise-XOR of this and the other.</span></div><div class='line' id='LC589'><span class="cm"> * @api public</span></div><div class='line' id='LC590'><span class="cm"> */</span></div><div class='line' id='LC591'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">xor</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC592'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">low_</span> <span class="o">^</span> <span class="nx">other</span><span class="p">.</span><span class="nx">low_</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span> <span class="o">^</span> <span class="nx">other</span><span class="p">.</span><span class="nx">high_</span><span class="p">);</span></div><div class='line' id='LC593'><span class="p">};</span></div><div class='line' id='LC594'><br/></div><div class='line' id='LC595'><span class="cm">/**</span></div><div class='line' id='LC596'><span class="cm"> * Returns this Long with bits shifted to the left by the given amount.</span></div><div class='line' id='LC597'><span class="cm"> *</span></div><div class='line' id='LC598'><span class="cm"> * @param {Number} numBits the number of bits by which to shift.</span></div><div class='line' id='LC599'><span class="cm"> * @return {Long} this shifted to the left by the given amount.</span></div><div class='line' id='LC600'><span class="cm"> * @api public</span></div><div class='line' id='LC601'><span class="cm"> */</span></div><div class='line' id='LC602'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shiftLeft</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">numBits</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC603'>&nbsp;&nbsp;<span class="nx">numBits</span> <span class="o">&amp;=</span> <span class="mi">63</span><span class="p">;</span></div><div class='line' id='LC604'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC606'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">low</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">&lt;</span> <span class="mi">32</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">high</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span><span class="p">;</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">low</span> <span class="o">&lt;&lt;</span> <span class="nx">numBits</span><span class="p">,</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">high</span> <span class="o">&lt;&lt;</span> <span class="nx">numBits</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">low</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="mi">32</span> <span class="o">-</span> <span class="nx">numBits</span><span class="p">)));</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">low</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">-</span> <span class="mi">32</span><span class="p">));</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC616'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC617'><span class="p">};</span></div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'><span class="cm">/**</span></div><div class='line' id='LC620'><span class="cm"> * Returns this Long with bits shifted to the right by the given amount.</span></div><div class='line' id='LC621'><span class="cm"> *</span></div><div class='line' id='LC622'><span class="cm"> * @param {Number} numBits the number of bits by which to shift.</span></div><div class='line' id='LC623'><span class="cm"> * @return {Long} this shifted to the right by the given amount.</span></div><div class='line' id='LC624'><span class="cm"> * @api public</span></div><div class='line' id='LC625'><span class="cm"> */</span></div><div class='line' id='LC626'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shiftRight</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">numBits</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC627'>&nbsp;&nbsp;<span class="nx">numBits</span> <span class="o">&amp;=</span> <span class="mi">63</span><span class="p">;</span></div><div class='line' id='LC628'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC630'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">high</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span><span class="p">;</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">&lt;</span> <span class="mi">32</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">low</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">low</span> <span class="o">&gt;&gt;&gt;</span> <span class="nx">numBits</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">high</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="mi">32</span> <span class="o">-</span> <span class="nx">numBits</span><span class="p">)),</span></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">high</span> <span class="o">&gt;&gt;</span> <span class="nx">numBits</span><span class="p">);</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">high</span> <span class="o">&gt;&gt;</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">-</span> <span class="mi">32</span><span class="p">),</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">high</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC642'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC643'><span class="p">};</span></div><div class='line' id='LC644'><br/></div><div class='line' id='LC645'><span class="cm">/**</span></div><div class='line' id='LC646'><span class="cm"> * Returns this Long with bits shifted to the right by the given amount, with the new top bits matching the current sign bit.</span></div><div class='line' id='LC647'><span class="cm"> *</span></div><div class='line' id='LC648'><span class="cm"> * @param {Number} numBits the number of bits by which to shift.</span></div><div class='line' id='LC649'><span class="cm"> * @return {Long} this shifted to the right by the given amount, with zeros placed into the new leading bits.</span></div><div class='line' id='LC650'><span class="cm"> * @api public</span></div><div class='line' id='LC651'><span class="cm"> */</span></div><div class='line' id='LC652'><span class="nx">Long</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shiftRightUnsigned</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">numBits</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC653'>&nbsp;&nbsp;<span class="nx">numBits</span> <span class="o">&amp;=</span> <span class="mi">63</span><span class="p">;</span></div><div class='line' id='LC654'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC656'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">high</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">high_</span><span class="p">;</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">&lt;</span> <span class="mi">32</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">low</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">low_</span><span class="p">;</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">low</span> <span class="o">&gt;&gt;&gt;</span> <span class="nx">numBits</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">high</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="mi">32</span> <span class="o">-</span> <span class="nx">numBits</span><span class="p">)),</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">high</span> <span class="o">&gt;&gt;&gt;</span> <span class="nx">numBits</span><span class="p">);</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">==</span> <span class="mi">32</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="nx">high</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="nx">high</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="nx">numBits</span> <span class="o">-</span> <span class="mi">32</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC668'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC669'><span class="p">};</span></div><div class='line' id='LC670'><br/></div><div class='line' id='LC671'><span class="cm">/**</span></div><div class='line' id='LC672'><span class="cm"> * Returns a Long representing the given (32-bit) integer value.</span></div><div class='line' id='LC673'><span class="cm"> *</span></div><div class='line' id='LC674'><span class="cm"> * @param {Number} value the 32-bit integer in question.</span></div><div class='line' id='LC675'><span class="cm"> * @return {Long} the corresponding Long value.</span></div><div class='line' id='LC676'><span class="cm"> * @api public</span></div><div class='line' id='LC677'><span class="cm"> */</span></div><div class='line' id='LC678'><span class="nx">Long</span><span class="p">.</span><span class="nx">fromInt</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC679'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">-</span><span class="mi">128</span> <span class="o">&lt;=</span> <span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span> <span class="o">&lt;</span> <span class="mi">128</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cachedObj</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">INT_CACHE_</span><span class="p">[</span><span class="nx">value</span><span class="p">];</span></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cachedObj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cachedObj</span><span class="p">;</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC684'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Long</span><span class="p">(</span><span class="nx">value</span> <span class="o">|</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">value</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC687'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">-</span><span class="mi">128</span> <span class="o">&lt;=</span> <span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span> <span class="o">&lt;</span> <span class="mi">128</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Long</span><span class="p">.</span><span class="nx">INT_CACHE_</span><span class="p">[</span><span class="nx">value</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC689'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC690'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC691'><span class="p">};</span></div><div class='line' id='LC692'><br/></div><div class='line' id='LC693'><span class="cm">/**</span></div><div class='line' id='LC694'><span class="cm"> * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.</span></div><div class='line' id='LC695'><span class="cm"> *</span></div><div class='line' id='LC696'><span class="cm"> * @param {Number} value the number in question.</span></div><div class='line' id='LC697'><span class="cm"> * @return {Long} the corresponding Long value.</span></div><div class='line' id='LC698'><span class="cm"> * @api public</span></div><div class='line' id='LC699'><span class="cm"> */</span></div><div class='line' id='LC700'><span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC701'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="nb">isFinite</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC703'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&lt;=</span> <span class="o">-</span><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_63_DBL_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span><span class="p">;</span></div><div class='line' id='LC705'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&gt;=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_63_DBL_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">MAX_VALUE</span><span class="p">;</span></div><div class='line' id='LC707'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="o">-</span><span class="nx">value</span><span class="p">).</span><span class="nx">negate</span><span class="p">();</span></div><div class='line' id='LC709'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Long</span><span class="p">(</span></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">value</span> <span class="o">%</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span><span class="p">)</span> <span class="o">|</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">value</span> <span class="o">/</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span><span class="p">)</span> <span class="o">|</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC713'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC714'><span class="p">};</span></div><div class='line' id='LC715'><br/></div><div class='line' id='LC716'><span class="cm">/**</span></div><div class='line' id='LC717'><span class="cm"> * Returns a Long representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits.</span></div><div class='line' id='LC718'><span class="cm"> *</span></div><div class='line' id='LC719'><span class="cm"> * @param {Number} lowBits the low 32-bits.</span></div><div class='line' id='LC720'><span class="cm"> * @param {Number} highBits the high 32-bits.</span></div><div class='line' id='LC721'><span class="cm"> * @return {Long} the corresponding Long value.</span></div><div class='line' id='LC722'><span class="cm"> * @api public</span></div><div class='line' id='LC723'><span class="cm"> */</span></div><div class='line' id='LC724'><span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">lowBits</span><span class="p">,</span> <span class="nx">highBits</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC725'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Long</span><span class="p">(</span><span class="nx">lowBits</span><span class="p">,</span> <span class="nx">highBits</span><span class="p">);</span></div><div class='line' id='LC726'><span class="p">};</span></div><div class='line' id='LC727'><br/></div><div class='line' id='LC728'><span class="cm">/**</span></div><div class='line' id='LC729'><span class="cm"> * Returns a Long representation of the given string, written using the given radix.</span></div><div class='line' id='LC730'><span class="cm"> *</span></div><div class='line' id='LC731'><span class="cm"> * @param {String} str the textual representation of the Long.</span></div><div class='line' id='LC732'><span class="cm"> * @param {Number} opt_radix the radix in which the text is written.</span></div><div class='line' id='LC733'><span class="cm"> * @return {Long} the corresponding Long value.</span></div><div class='line' id='LC734'><span class="cm"> * @api public</span></div><div class='line' id='LC735'><span class="cm"> */</span></div><div class='line' id='LC736'><span class="nx">Long</span><span class="p">.</span><span class="nx">fromString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opt_radix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC737'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;number format error: empty string&#39;</span><span class="p">);</span></div><div class='line' id='LC739'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC740'><br/></div><div class='line' id='LC741'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">radix</span> <span class="o">=</span> <span class="nx">opt_radix</span> <span class="o">||</span> <span class="mi">10</span><span class="p">;</span></div><div class='line' id='LC742'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">radix</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">||</span> <span class="mi">36</span> <span class="o">&lt;</span> <span class="nx">radix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;radix out of range: &#39;</span> <span class="o">+</span> <span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC744'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;-&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromString</span><span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span> <span class="nx">radix</span><span class="p">).</span><span class="nx">negate</span><span class="p">();</span></div><div class='line' id='LC748'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;-&#39;</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;number format error: interior &quot;-&quot; character: &#39;</span> <span class="o">+</span> <span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC750'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC751'><br/></div><div class='line' id='LC752'>&nbsp;&nbsp;<span class="c1">// Do several (8) digits each time through the loop, so as to</span></div><div class='line' id='LC753'>&nbsp;&nbsp;<span class="c1">// minimize the calls to the very expensive emulated div.</span></div><div class='line' id='LC754'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">radixToPower</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">radix</span><span class="p">,</span> <span class="mi">8</span><span class="p">));</span></div><div class='line' id='LC755'><br/></div><div class='line' id='LC756'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span><span class="p">;</span></div><div class='line' id='LC757'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC758'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC759'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">i</span> <span class="o">+</span> <span class="nx">size</span><span class="p">),</span> <span class="nx">radix</span><span class="p">);</span></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">size</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">power</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">radix</span><span class="p">,</span> <span class="nx">size</span><span class="p">));</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">power</span><span class="p">).</span><span class="nx">add</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nx">value</span><span class="p">));</span></div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC764'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">multiply</span><span class="p">(</span><span class="nx">radixToPower</span><span class="p">);</span></div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">Long</span><span class="p">.</span><span class="nx">fromNumber</span><span class="p">(</span><span class="nx">value</span><span class="p">));</span></div><div class='line' id='LC766'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC767'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC768'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC769'><span class="p">};</span></div><div class='line' id='LC770'><br/></div><div class='line' id='LC771'><span class="c1">// NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the</span></div><div class='line' id='LC772'><span class="c1">// from* methods on which they depend.</span></div><div class='line' id='LC773'><br/></div><div class='line' id='LC774'><br/></div><div class='line' id='LC775'><span class="cm">/**</span></div><div class='line' id='LC776'><span class="cm"> * A cache of the Long representations of small integer values.</span></div><div class='line' id='LC777'><span class="cm"> * @type {Object}</span></div><div class='line' id='LC778'><span class="cm"> * @api private</span></div><div class='line' id='LC779'><span class="cm"> */</span></div><div class='line' id='LC780'><span class="nx">Long</span><span class="p">.</span><span class="nx">INT_CACHE_</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC781'><br/></div><div class='line' id='LC782'><span class="c1">// NOTE: the compiler should inline these constant values below and then remove</span></div><div class='line' id='LC783'><span class="c1">// these variables, so there should be no runtime penalty for these.</span></div><div class='line' id='LC784'><br/></div><div class='line' id='LC785'><span class="cm">/**</span></div><div class='line' id='LC786'><span class="cm"> * Number used repeated below in calculations.  This must appear before the</span></div><div class='line' id='LC787'><span class="cm"> * first call to any from* function below.</span></div><div class='line' id='LC788'><span class="cm"> * @type {number}</span></div><div class='line' id='LC789'><span class="cm"> * @api private</span></div><div class='line' id='LC790'><span class="cm"> */</span></div><div class='line' id='LC791'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_16_DBL_</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC792'><br/></div><div class='line' id='LC793'><span class="cm">/**</span></div><div class='line' id='LC794'><span class="cm"> * @type {number}</span></div><div class='line' id='LC795'><span class="cm"> * @api private</span></div><div class='line' id='LC796'><span class="cm"> */</span></div><div class='line' id='LC797'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_24_DBL_</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="mi">24</span><span class="p">;</span></div><div class='line' id='LC798'><br/></div><div class='line' id='LC799'><span class="cm">/**</span></div><div class='line' id='LC800'><span class="cm"> * @type {number}</span></div><div class='line' id='LC801'><span class="cm"> * @api private</span></div><div class='line' id='LC802'><span class="cm"> */</span></div><div class='line' id='LC803'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_16_DBL_</span> <span class="o">*</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_16_DBL_</span><span class="p">;</span></div><div class='line' id='LC804'><br/></div><div class='line' id='LC805'><span class="cm">/**</span></div><div class='line' id='LC806'><span class="cm"> * @type {number}</span></div><div class='line' id='LC807'><span class="cm"> * @api private</span></div><div class='line' id='LC808'><span class="cm"> */</span></div><div class='line' id='LC809'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_31_DBL_</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC810'><br/></div><div class='line' id='LC811'><span class="cm">/**</span></div><div class='line' id='LC812'><span class="cm"> * @type {number}</span></div><div class='line' id='LC813'><span class="cm"> * @api private</span></div><div class='line' id='LC814'><span class="cm"> */</span></div><div class='line' id='LC815'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_48_DBL_</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span> <span class="o">*</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_16_DBL_</span><span class="p">;</span></div><div class='line' id='LC816'><br/></div><div class='line' id='LC817'><span class="cm">/**</span></div><div class='line' id='LC818'><span class="cm"> * @type {number}</span></div><div class='line' id='LC819'><span class="cm"> * @api private</span></div><div class='line' id='LC820'><span class="cm"> */</span></div><div class='line' id='LC821'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_64_DBL_</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span> <span class="o">*</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_32_DBL_</span><span class="p">;</span></div><div class='line' id='LC822'><br/></div><div class='line' id='LC823'><span class="cm">/**</span></div><div class='line' id='LC824'><span class="cm"> * @type {number}</span></div><div class='line' id='LC825'><span class="cm"> * @api private</span></div><div class='line' id='LC826'><span class="cm"> */</span></div><div class='line' id='LC827'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_63_DBL_</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_64_DBL_</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC828'><br/></div><div class='line' id='LC829'><span class="cm">/** @type {Long} */</span></div><div class='line' id='LC830'><span class="nx">Long</span><span class="p">.</span><span class="nx">ZERO</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromInt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC831'><br/></div><div class='line' id='LC832'><span class="cm">/** @type {Long} */</span></div><div class='line' id='LC833'><span class="nx">Long</span><span class="p">.</span><span class="nx">ONE</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromInt</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC834'><br/></div><div class='line' id='LC835'><span class="cm">/** @type {Long} */</span></div><div class='line' id='LC836'><span class="nx">Long</span><span class="p">.</span><span class="nx">NEG_ONE</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromInt</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC837'><br/></div><div class='line' id='LC838'><span class="cm">/** @type {Long} */</span></div><div class='line' id='LC839'><span class="nx">Long</span><span class="p">.</span><span class="nx">MAX_VALUE</span> <span class="o">=</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="mh">0xFFFFFFFF</span> <span class="o">|</span> <span class="mi">0</span><span class="p">,</span> <span class="mh">0x7FFFFFFF</span> <span class="o">|</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC841'><br/></div><div class='line' id='LC842'><span class="cm">/** @type {Long} */</span></div><div class='line' id='LC843'><span class="nx">Long</span><span class="p">.</span><span class="nx">MIN_VALUE</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromBits</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mh">0x80000000</span> <span class="o">|</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC844'><br/></div><div class='line' id='LC845'><span class="cm">/**</span></div><div class='line' id='LC846'><span class="cm"> * @type {Long}</span></div><div class='line' id='LC847'><span class="cm"> * @api private</span></div><div class='line' id='LC848'><span class="cm"> */</span></div><div class='line' id='LC849'><span class="nx">Long</span><span class="p">.</span><span class="nx">TWO_PWR_24_</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">.</span><span class="nx">fromInt</span><span class="p">(</span><span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="mi">24</span><span class="p">);</span></div><div class='line' id='LC850'><br/></div><div class='line' id='LC851'><span class="cm">/**</span></div><div class='line' id='LC852'><span class="cm"> * Expose.</span></div><div class='line' id='LC853'><span class="cm"> */</span></div><div class='line' id='LC854'><span class="nx">exports</span><span class="p">.</span><span class="nx">Long</span> <span class="o">=</span> <span class="nx">Long</span><span class="p">;</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.05560s from fe18.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.05673' data-host='fe18'></span>
    
  </body>
</html>

