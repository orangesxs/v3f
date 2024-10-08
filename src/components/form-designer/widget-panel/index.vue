<template>
  <el-scrollbar class="side-scroll-bar" :style="{ height: scrollerHeight }">
    <div class="panel-container">
      <el-tabs v-model="firstTab" class="no-bottom-margin indent-left-margin tabs">
        <el-tab-pane name="componentLib">
          <template #label>
            <span>
              <svg-icon icon-class="el-set-up" />
              {{ i18nt("designer.componentLib") }}
            </span>
          </template>

          <el-collapse v-model="activeNames" class="widget-collapse">
            <el-collapse-item
              name="1"
              :title="i18nt('designer.containerTitle')"
            >
              <draggable
                tag="ul"
                :list="containers"
                item-key="key"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                :clone="handleContainerWidgetClone"
                ghost-class="ghost"
                :sort="false"
                :move="checkContainerMove"
                @end="onContainerDragEnd"
              >
                <template #item="{ element: ctn }">
                  <li
                    class="container-widget-item"
                    :title="ctn.displayName"
                    @dblclick="addContainerByDbClick(ctn)"
                  >
                    <span
                      ><svg-icon
                        :icon-class="ctn.icon"
                        class-name="color-svg-icon"
                      />{{
                        i18n2t(
                          `designer.widgetLabel.${ctn.type}`,
                          `extension.widgetLabel.${ctn.type}`
                        )
                      }}</span
                    >
                  </li>
                </template>
              </draggable>
            </el-collapse-item>

            <el-collapse-item
              name="2"
              :title="i18nt('designer.basicFieldTitle')"
              v-if="basicFields.length > 0"
            >
              <draggable
                tag="ul"
                :list="basicFields"
                item-key="key"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                :move="checkFieldMove"
                :clone="handleFieldWidgetClone"
                ghost-class="ghost"
                :sort="false"
              >
                <template #item="{ element: fld }">
                  <li
                    class="field-widget-item"
                    :title="fld.displayName"
                    @dblclick="addFieldByDbClick(fld)"
                  >
                    <span
                      ><svg-icon
                        :icon-class="fld.icon"
                        class-name="color-svg-icon"
                      />
                      {{
                        i18n2t(
                          `designer.widgetLabel.${fld.type}`,
                          `extension.widgetLabel.${fld.type}`
                        )
                      }}
                      </span>
                  </li>
                </template>
              </draggable>
            </el-collapse-item>

            <el-collapse-item
              name="3"
              :title="i18nt('designer.advancedFieldTitle')"
              v-if="advancedFields.length > 0"
            >
              <draggable
                tag="ul"
                :list="advancedFields"
                item-key="key"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                :move="checkFieldMove"
                :clone="handleFieldWidgetClone"
                ghost-class="ghost"
                :sort="false"
              >
                <template #item="{ element: fld }">
                  <li
                    class="field-widget-item"
                    :title="fld.displayName"
                    @dblclick="addFieldByDbClick(fld)"
                  >
                    <span
                      ><svg-icon
                        :icon-class="fld.icon"
                        class-name="color-svg-icon"
                      />{{
                        i18n2t(
                          `designer.widgetLabel.${fld.type}`,
                          `extension.widgetLabel.${fld.type}`
                        )
                      }}</span
                    >
                  </li>
                </template>
              </draggable>
            </el-collapse-item>

            <el-collapse-item
              name="4"
              :title="i18nt('designer.customFieldTitle')"
              v-if="customFields.length > 0"
            >
              <draggable
                tag="ul"
                :list="customFields"
                item-key="key"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                :move="checkFieldMove"
                :clone="handleFieldWidgetClone"
                ghost-class="ghost"
                :sort="false"
              >
                <template #item="{ element: fld }">
                  <li
                    class="field-widget-item"
                    :title="fld.displayName"
                    @dblclick="addFieldByDbClick(fld)"
                  >
                    <span>
                      <svg-icon
                        :icon-class="fld.icon"
                        class-name="color-svg-icon"
                      />{{
                        i18n2t(
                          `designer.widgetLabel.${fld.type}`,
                          `extension.widgetLabel.${fld.type}`
                        )
                      }}</span
                    >
                  </li>
                </template>
              </draggable>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>

        <el-tab-pane
          v-if="showFormTemplates()&&formTemplates&&formTemplates.length>0"
          name="formLib"
          style="padding: 8px"
        >
          <template #label>
            <span>
              <svg-icon icon-class="el-form-template" />
              {{ i18nt("designer.formLib") }}
              </span>
          </template>

          <template v-for="(ft, idx) in formTemplates">
            <el-card
              :bord-style="{ padding: '0' }"
              shadow="hover"
              class="ft-card"
            >
              <el-popover placement="right" trigger="hover" width="auto">
                <template #reference>
                  <img :src="ft.imgUrl" style="width: 200px" />
                </template>
                <img :src="ft.imgUrl" style="height: 600px; width: 720px" />
              </el-popover>
              <div class="bottom clear-fix">
                <span class="ft-title">#{{ idx + 1 }} {{ ft.title }}</span>
                <el-button
                  link
                  type="primary"
                  class="right-button"
                  @click="loadFormTemplate(ft.jsonStr)"
                >
                  {{ i18nt("designer.hint.loadFormTemplate") }}</el-button
                >
              </div>
            </el-card>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-scrollbar>
</template>

<script>
import {
  containers as CONS,
  basicFields as BFS,
  advancedFields as AFS,
  customFields as CFS,
} from "./widgetsConfig";
import { addWindowResizeHandler, generateId } from "@/utils/util";
import i18n from "@/utils/i18n";
import SvgIcon from "@/components/svg-icon/index";
export default {
  name: "FieldPanel",
  mixins: [i18n],
  components: {
    SvgIcon,
  },
  props: {
    designer: Object,
  },
  inject: ["getBannedWidgets", "getDesignerConfig", "getFormTemplates"],
  data() {
    return {
      designerConfig: this.getDesignerConfig(),

      firstTab: "componentLib",

      scrollerHeight: '100%',

      activeNames: ["1", "2", "3", "4"],

      containers: [],
      basicFields: [],
      advancedFields: [],
      customFields: [],
      formTemplates: this.getFormTemplates(),
    };
  },
  computed: {
    //
  },
  created() {
    this.loadWidgets();
  },
  mounted() {
    //this.loadWidgets()

    // this.scrollerHeight = window.innerHeight - 56 + "px";
    // addWindowResizeHandler(() => {
    //   this.$nextTick(() => {
    //     this.scrollerHeight = window.innerHeight - 56 + "px";
    //     //console.log(this.scrollerHeight)
    //   });
    // });
  },
  methods: {
    isBanned(wName) {
      return this.getBannedWidgets().indexOf(wName) > -1;
    },

    showFormTemplates() {
      if (this.designerConfig["formTemplates"] === undefined) {
        return true;
      }

      return !!this.designerConfig["formTemplates"];
    },

    loadWidgets() {
      this.containers = CONS.map((con) => {
        return {
          key: generateId(),
          ...con,
          displayName: this.i18n2t(
            `designer.widgetLabel.${con.type}`,
            `extension.widgetLabel.${con.type}`
          ),
        };
      }).filter((con) => {
        return !con.internal && !this.isBanned(con.type);
      });

      this.basicFields = BFS.map((fld) => {
        return {
          key: generateId(),
          ...fld,
          displayName: this.i18n2t(
            `designer.widgetLabel.${fld.type}`,
            `extension.widgetLabel.${fld.type}`
          ),
        };
      }).filter((fld) => {
        return !this.isBanned(fld.type);
      });

      this.advancedFields = AFS.map((fld) => {
        return {
          key: generateId(),
          ...fld,
          displayName: this.i18n2t(
            `designer.widgetLabel.${fld.type}`,
            `extension.widgetLabel.${fld.type}`
          ),
        };
      }).filter((fld) => {
        return !this.isBanned(fld.type);
      });

      this.customFields = CFS.map((fld) => {
        return {
          key: generateId(),
          ...fld,
          displayName: this.i18n2t(
            `designer.widgetLabel.${fld.type}`,
            `extension.widgetLabel.${fld.type}`
          ),
        };
      }).filter((fld) => {
        return !this.isBanned(fld.type);
      });
    },

    handleContainerWidgetClone(origin) {
      return this.designer.copyNewContainerWidget(origin);
    },

    handleFieldWidgetClone(origin) {
      return this.designer.copyNewFieldWidget(origin);
    },

    checkContainerMove(evt) {
      return this.designer.checkWidgetMove(evt);
    },

    checkFieldMove(evt) {
      return this.designer.checkFieldMove(evt);
    },

    onContainerDragEnd(evt) {
      //console.log('Drag end of container: ')
      //console.log(evt)
    },

    addContainerByDbClick(container) {
      this.designer.addContainerByDbClick(container);
    },

    addFieldByDbClick(widget) {
      this.designer.addFieldByDbClick(widget);
    },

    loadFormTemplate(json) {
      this.$confirm(
        this.i18nt("designer.hint.loadFormTemplateHint"),
        this.i18nt("render.hint.prompt"),
        {
          confirmButtonText: this.i18nt("render.hint.confirm"),
          cancelButtonText: this.i18nt("render.hint.cancel"),
        }
      )
        .then(() => {
          let modifiedFlag = false;
          if (typeof json === "string") {
            modifiedFlag = this.designer.loadFormJson(JSON.parse(json));
          } else if (json.constructor === Object) {
            modifiedFlag = this.designer.loadFormJson(json);
          }

          if (modifiedFlag) {
            this.designer.emitHistoryChange();
          }

          this.$message.success(
            this.i18nt("designer.hint.loadFormTemplateSuccess")
          );
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.color-svg-icon {
  -webkit-font-smoothing: antialiased;
  color: #7c7d82;
}

.side-scroll-bar {
  :deep(.el-scrollbar__wrap) {
    height: 100%;
    overflow-x: hidden;

    .el-scrollbar__view {
      height: 100%;
      .tabs {
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-tabs__content {
          flex: 1;
          height: 0;
          .el-tab-pane{
            height: 100%;
            overflow-y: auto;
          }
        }
      }
    }
  }


}

div.panel-container {
  height: 100%;
  // padding-bottom: 10px;
}

.no-bottom-margin :deep(.el-tabs__header) {
  margin-bottom: 0;
}

.indent-left-margin {
  :deep(.el-tabs__nav) {
    margin-left: 20px;
  }
}

.el-collapse-item :deep(ul) > li {
  list-style: none;
}

.widget-collapse {
  border-top-width: 0;

  :deep(.el-collapse-item__header) {
    padding: 0 4px;
    font-style: italic;
    font-weight: bold;
  }

  :deep(.el-collapse-item__content) {
    padding-bottom: 6px;

    ul {
      padding-left: 10px; /* 重置IE11默认样式 */
      margin: 0; /* 重置IE11默认样式 */
      margin-block-start: 0;
      margin-block-end: 0.25em;
      padding-inline-start: 10px;

      &:after {
        content: "";
        display: block;
        clear: both;
      }

      .container-widget-item,
      .field-widget-item {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        width: 98px;
        margin: 2px 6px 6px 0;
        cursor: move;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        background: #fff;
        border: 1px solid #e8e9eb;
        border-radius: 4px;
        padding: 0 8px;
        box-sizing: border-box;
        width: calc(50% - 10px);
      }

      .container-widget-item:hover,
      .field-widget-item:hover {
        background: #f1f2f3;
        border-color: $--color-primary;

        .color-svg-icon {
          color: $--color-primary;
        }
      }

      .drag-handler {
        position: absolute;
        top: 0;
        left: 160px;
        background-color: #dddddd;
        border-radius: 5px;
        padding-right: 5px;
        font-size: 11px;
        color: #666666;
      }
    }
  }
}

.el-card.ft-card {
  border: 1px solid #8896b3;
}

.ft-card {
  margin-bottom: 10px;

  .bottom {
    margin-top: 10px;
    line-height: 12px;
  }

  /*
    .image-zoom {
      height: 500px;
      width: 620px
    }
    */

  .ft-title {
    font-size: 13px;
    font-weight: bold;
  }

  .right-button {
    padding: 0;
    float: right;
  }

  .clear-fix:before,
  .clear-fix:after {
    display: table;
    content: "";
  }

  .clear-fix:after {
    clear: both;
  }
}
</style>
