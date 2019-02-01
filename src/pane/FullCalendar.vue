<template>
  <div class="flex grow bg-info" >
    <div class="flex h-left bg-dark text-light p-2 pt-3 a-center">
      <h3>
        {{ curMonth.format('YYYY년 MM월') }}
      </h3>
      <div class="btn-group btn-group-sm ml-3" role="group">
        <button type="button" class="btn btn-secondary" @click="prevMonth"> <icon icon="chevron-left"/> </button>
        <button type="button" class="btn btn-secondary" @click="nextMonth"> <icon icon="chevron-right"/> </button>
        <button type="button" class="btn btn-secondary" @click="currentMonth"> <icon icon="stop"/> </button>
      </div>
      <div class="flex h-right grow">
        <div class="btn bg-light" @click="option.showWeek = !option.showWeek">
          {{ option.showWeek ? 'hide Week' : 'show Week'}}
        </div>
      </div>
    </div>
    <div class="flex h-left px-2 bg-secondary">
      <div v-for="(lbWeek, w) in lbWeeks" :key="w" class="lbweek grow p-1 px-2">
        <strong>{{ lbWeek }}</strong>
      </div>
    </div>
    <div class="flex grow px-2" @mousewheel="onmousewheel">
      <div v-for="(row, r) in dayItems" class="week-content flex grow relative" :key="r">
        <div class="flex h-left">
          <div v-for="(col, c) in row" class="flex h-left grow py-1 px-2" :key="c">
            <div :style="col.titleStyle">
              {{col.title}}
            </div>
            <div class="flex grow h-right">
              {{ col.desc }}
            </div>
          </div>
        </div>
        <div class="grow">

        </div>
        <div class="frame flex h-left">
          <div v-for="(col, c) in row" class="day-guid grow border border-light" :key="c">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      curMonth: moment(),
      option: {
        showWeek: true
      }
    }
  },
  mounted () {
    this.currentMonth()
  },
  methods: {
    onmousewheel (e) {
      var dy = e.deltaY;
      dy >= 0 ? this.nextMonth() : this.prevMonth()
    },
    nextMonth () {
      this.curMonth.add(1,'M')
      this.curMonth = moment(this.curMonth)
    },
    prevMonth () {
      this.curMonth.add(-1,'M')
      this.curMonth = moment(this.curMonth)
    },
    currentMonth () {
      var m = moment()
      m.date(1)
      this.curMonth = m
    }
  },
  computed: {
    dayItems () {
      var txtM = this.curMonth.format('YYYYMM')
      var d = moment(this.curMonth)
      d.day(1)
      
      var items = []
      for (var r = 0; r < 6; r++) {
        let row = []
        if (this.option.showWeek) {
          let col0 = {
            title: d.format('ww주차'),
            desc: '📚',
            titleStyle: {
              fontSize: '0.9em'
            }
          }
          row.push(col0)
        }
        for (var c = 1; c < 8; c++) {
          var toMonth = txtM === d.format('YYYYMM') 
          let col = {
            title: toMonth ? d.format('DD') : d.format('MM/DD'),
            desc: '📄',
            titleStyle: {
              fontWeight: 'bold',
              opacity: toMonth ? '' : '0.5'
            }
          }
          row.push(col)
          d.add(1,'d')
        }
        items.push(row)
      }
      return items
    },
    lbWeeks () {
      var l = ['일', '월', '화', '수', '목', '금', '토']
      if (this.option.showWeek) l.splice(0,0,'주차')
      return l
    },
  },
  components: { }
}
</script>

<style lang="scss" scoped>
.lbweek:not(:last-child) {
  border-right: solid 1pt white
}
</style>

