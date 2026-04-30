<template>
  <aside id="pxl-sidebar-area" class="pxl-sidebar-area pxl-sidebar-post col-12 col-lg-4" aria-label="Service sidebar">
    <div class="pxl-sidebar-sticky">
      <section id="search-service-sidebar" class="widget widget_search">
        <div class="widget-content">
          <form role="search" class="search-form" action="/" @submit.prevent>
            <div class="searchform-wrap">
              <input type="text" placeholder="Search" name="s" class="search-field" autocomplete="off" />
              <button type="submit" class="search-submit">
                <i class="caseicon-search"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <div class="pxl-author-info widget">
        <div class="content-inner">
          <div class="author-image">
            <div class="image-wrap flash-hover">
              <img src="/images/wp-content__uploads__2023__10__about-author.jpg" alt="Author Image" />
            </div>
          </div>
          <div class="author-desc">
            We have created amazing designs of houses, hotels and high rise buildings that fit the trend. We encourage
            every team member to be a whole person.
          </div>
          <div class="author-social">
            <div class="social-item">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><span class="caseicon-facebook"></span></a>
            </div>
            <div class="social-item">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span class="caseicon-twitter"></span></a>
            </div>
            <div class="social-item">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><span class="caseicon-instagram"></span></a>
            </div>
            <div class="social-item">
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><span class="caseicon-youtube"></span></a>
            </div>
            <div class="social-item">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><span class="caseicon-linkedin"></span></a>
            </div>
          </div>
        </div>
      </div>
      <section id="categories-service-sidebar" class="widget widget_categories">
        <div class="widget-content">
          <h2 class="widget-title"><span>Categories</span></h2>
          <ul>
            <li class="cat-item cat-item-92">
              <router-link to="/immigration">Immigrate<span class="pxl-count pxl-right">4</span></router-link>
            </li>
            <li class="cat-item cat-item-94">
              <router-link to="/other">Other<span class="pxl-count pxl-right">3</span></router-link>
            </li>
            <li class="cat-item cat-item-93">
              <router-link to="/visas">Visa<span class="pxl-count pxl-right">4</span></router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </aside>
</template>
