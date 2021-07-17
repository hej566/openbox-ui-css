<template>
  <div :class="tableClasses" :id="_uid">
    <c4it-scrollbar :height="height" v-if="fixedHeader" is-vertical>
      <table>
        <thead>
          <tr>
            <th
              v-for="(field, idx) in innerFields"
              :key="idx"
              :style="{ backgroundColor: field.colColor }"
              :class="field.thClass"
            >
              <span>{{ field.label }}</span>
              <svg-icon
                v-if="field.sortable"
                @click="sort(field.key)"
                icon-class="sort"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <div
            v-for="(row, idx_item) in rows"
            :key="idx_item"
            :data-id="idx_item"
            class="row"
          >
            <tr
              :style="{
                backgroundColor: row.rowColor ? row.rowColor : '#ffffff'
              }"
            >
              <td
                v-for="(field, idx_field) in fields"
                :key="idx_field"
                :style="{ backgroundColor: getColor(row, field) }"
                :class="field.tdClass"
              >
                <slot
                  :name="field.key"
                  :row="{
                    ...row,
                    toggleDetails: () => detailsWrapper(idx_item)
                  }"
                >
                  {{ row[field.key] }}
                </slot>
              </td>
            </tr>
            <tr
              :style="{ borderTop: '1px solid #d6d7db' }"
              v-if="showDetails[idx_item]"
            >
              <slot :row="row" name="row-details"></slot>
            </tr>
          </div>
        </tbody>
        <tfoot></tfoot>
      </table>
    </c4it-scrollbar>
    <c4it-scrollbar :width="width" v-else-if="fixedColumn" is-horizontal>
      <table>
        <thead>
          <tr>
            <th
              v-for="(field, idx) in innerFields"
              :key="idx"
              :style="{ backgroundColor: field.colColor }"
              :class="field.thClass"
            >
              <span>{{ field.label }}</span>
              <svg-icon
                v-if="field.sortable"
                @click="sort(field.key)"
                icon-class="sort"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <div
            v-for="(row, idx_item) in rows"
            :key="idx_item"
            :data-id="idx_item"
            class="row"
          >
            <tr
              :style="{
                backgroundColor: row.rowColor ? row.rowColor : '#ffffff'
              }"
            >
              <td
                v-for="(field, idx_field) in innerFields"
                :key="idx_field"
                :style="{ backgroundColor: getColor(row, field) }"
                :class="field.tdClass"
              >
                <slot
                  :name="field.key"
                  :row="{
                    ...row,
                    toggleDetails: () => detailsWrapper(idx_item)
                  }"
                >
                  {{ row[field.key] }}
                </slot>
              </td>
            </tr>
            <tr
              :style="{ borderTop: '1px solid #d6d7db' }"
              v-if="showDetails[idx_item]"
            >
              <slot :row="row" name="row-details"></slot>
            </tr>
          </div>
        </tbody>
        <tfoot></tfoot>
      </table>
    </c4it-scrollbar>

    <table v-else>
      <thead>
        <tr>
          <th
            v-for="(field, idx) in innerFields"
            :key="idx"
            :style="{ backgroundColor: field.colColor }"
            :class="field.thClass"
          >
            <span>{{ field.label }}</span>
            <svg-icon
              v-if="field.sortable"
              @click="sort(field.key)"
              icon-class="sort"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <div
          v-for="(row, idx_item) in rows"
          :key="idx_item"
          :data-id="idx_item"
          class="row"
        >
          <tr
            :style="{
              backgroundColor: row.rowColor ? row.rowColor : '#ffffff'
            }"
          >
            <td
              v-for="(field, idx_field) in innerFields"
              :key="idx_field"
              :style="{ backgroundColor: getColor(row, field) }"
              :class="field.tdClass"
            >
              <slot
                :name="field.key"
                :row="{
                  ...row,
                  toggleDetails: () => detailsWrapper(idx_item)
                }"
              >
                {{ row[field.key] }}
              </slot>
            </td>
          </tr>
          <tr
            :style="{ borderTop: '1px solid #d6d7db' }"
            v-if="showDetails[idx_item]"
          >
            <slot :row="row" name="row-details"></slot>
          </tr>
        </div>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
import deepClone from '@/utils/deepClone';
import c4itScrollbar from '@/components/Scrollbar/Index.vue';

export default {
  /*eslint-disable*/
  name: `${ns}Table`,
  /*eslint-enable*/
  components: {
    c4itScrollbar
  },
  props: {
    fields: {
      type: Array,
      default: () => {
        return [];
      }
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    stripped: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 9999
    },
    fixedColumn: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 9999
    },
    columnName: {
      type: String,
      default: ''
    },
    drag: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      tableClassArr: [],
      descent: true,
      rows: null,
      showDetails: {},
      innerFields: [],
      innerItems: [],
      tableElm: null
    };
  },

  computed: {
    tableClasses() {
      return this.tableClassArr;
    }
  },

  watch: {
    fields: {
      immediate: true,
      handler(val) {
        this.innerFields = val;
      }
    },
    items: {
      immediate: true,
      handler(val) {
        this.innerItems = val;
        this.rows = deepClone(this.innerItems);
        if (val.length && this.drag) {
          this.$nextTick(() => {
            this.tableElm.querySelectorAll('.row').forEach((rowElm, idx) => {
              rowElm.draggable = true;
              rowElm.addEventListener('dragstart', this.dragStartHandler);
              rowElm.addEventListener('dragover', this.dragOverHandler);
              rowElm.addEventListener('drop', this.dropHandler);
              rowElm.addEventListener('dragleave', this.dragLeaveHandler);
            });
          });
        }
      }
    }
  },

  created() {
    this.initClasses();
  },

  mounted() {
    this.tableElm = document.getElementById(this._uid);
  },

  methods: {
    initClasses() {
      /*eslint-disable*/
      this.tableClassArr.push(`${ns}-table`)
      if (this.stripped) {
          this.tableClassArr.push(`${ns}-stripped`)
      }
      if (this.fixedHeader) {
        this.tableClassArr.push(`${ns}-fixedHeader`)
      }
      /*eslint-enable*/
      this.rows = deepClone(this.innerItems);
      this.rows.forEach((row, idx) => {
        this.$set(this.showDetails, idx, false);
      });
    },

    dragStartHandler($event) {
      $event.currentTarget.style.opacity = '0.4';
      const id = $event.currentTarget.dataset['id'];
      $event.dataTransfer.setData(
        'text/plain',
        JSON.stringify({ row: this.rows[id], id })
      );
      $event.dataTransfer.dropEffect = 'copy';
    },

    dragOverHandler($event) {
      $event.preventDefault();
      $event.dataTransfer.dropEffect = 'move';
      $event.currentTarget.style.outline = '2px dotted red';
    },

    dragLeaveHandler($event) {
      $event.preventDefault();
      $event.dataTransfer.dropEffect = 'move';
      $event.currentTarget.style.outline = 'none';
      $event.currentTarget.style.opacity = '1';
    },

    dropHandler($event) {
      $event.currentTarget.style.outline = 'none';
      $event.currentTarget.style.opacity = '1';
      const dropId = $event.currentTarget.dataset['id'];
      const { id, row } = JSON.parse($event.dataTransfer.getData('text/plain'));
      const dragId = id;
      const data = row;
      this.rows.splice(dragId, 1);
      this.rows.splice(dropId, 0, data);
    },

    getColor(item, field) {
      if (field.colColor) {
        return field.colColor;
      }
      if (item.cellColor) {
        return item.cellColor[field.key];
      }
    },

    detailsWrapper(id) {
      this.$set(this.showDetails, id, !this.showDetails[id]);
    },

    sort(key) {
      if (this.descent) {
        this.rows.sort((a, b) => {
          if (typeof a[key] === 'string') {
            return a[key].localeCompare(b[key]);
          }
          if (typeof a[key] === 'number') {
            return a[key] - b[key];
          }
        });
        this.descent = false;
      } else {
        this.rows.sort((a, b) => {
          if (typeof a[key] === 'string') {
            return b[key].localeCompare(a[key]);
          }
          if (typeof a[key] === 'number') {
            return b[key] - a[key];
          }
        });
        this.descent = true;
      }
    }
  }
};
</script>
