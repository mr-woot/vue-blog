<template>
    <div class="fw">
        <b-container class="section">
            <b-row>
                <b-col lg="8" md="12" ref="blogContent">
                    <router-view/>
                </b-col>
                <b-col lg="4" md="12" class="sidebar-col" id="rightSet" v-bind:style="[ width >= 992 ? {right: marginRightSidebar + 'px', width: calculatedWidth + 'px'} : {}]">
                    <sidebar></sidebar>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import BlogContent from "../views/BlogContent";
import Sidebar from "../containers/Sidebar";

export default {
  name: "Content",
  props: {
    msg: String
  },
  components: {
    BlogContent,
    Sidebar
  },
  data() {
    return {
      marginRightSidebar: 0,
      calculatedWidth: 0,
      width: window.innerWidth
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      const width = window.innerWidth;
      const sidebarWidth = this.$refs.blogContent.clientWidth;
      if (width >= 992 && width < 1140) {
        this.marginRightSidebar = (width - 960 + 30) / 2;
        this.calculatedWidth = sidebarWidth - parseFloat(960 / 3);
      } else if (width >= 1140 && width < 1200) {
        this.marginRightSidebar = (width - 956 + 30) / 2;
        this.calculatedWidth = sidebarWidth - parseFloat(956 / 3);
      } else if (width >= 1200) {
        this.marginRightSidebar = (width - 1140 + 30) / 2;
        this.calculatedWidth = sidebarWidth - parseFloat(1140 / 3);
      }
    }
  },
  ready: function() {},
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
.fw {
  width: 100%;
  background: #f6fbfc;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  padding-top: 112px;
}
.section {
  height: 100%;
  padding: 2rem;
  position: relative;
  flex: 1;
  /* bg styles */
  border-top: none;
  background: #fff;
  border-bottom: none;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 2px 6px 0 rgba(34, 34, 34, 0.08), 0 0 0 0px rgba(0, 0, 0, 0.08);
}
@media only screen and (min-width: 992px) {
  .sidebar-col {
    position: fixed;
    /* right: 2rem; */
    top: calc(2rem + 112px);
    overflow: scroll;
    padding: 15px;
    padding-top: 0;
  }
}
@media only screen and (max-width: 991px) {
  .fw {
    padding-top: 58px;
  }
}
</style>