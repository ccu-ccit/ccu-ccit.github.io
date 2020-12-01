<template>
    <a-layout>
      <a-layout-sider style="overflow-y:auto">
        <div style="margin: 15px">
            <a-input placeholder="活動名稱" :value="activity.activity"/>
        </div>
        <a-empty v-if="questions.length===0" style="margin: 15px"></a-empty>
        <template v-else>
            <a-card v-for="question in questions" :key="question.serial" :title="question.question" :bordered="false"
                id=thumbnail
                style="margin: 15px;"
                class="content"
                @click="edit(question)">
                <a-radio-group name="radioGroup1" disabled :default-value="1" style="width: 80%; text-align:left" v-model="question.answer">
                    <a-radio style="display:block" :value="1"> A. {{question.options['1']}}</a-radio>
                    <a-radio style="display:block" :value="2"> B. {{question.options['2']}}</a-radio>
                    <a-radio style="display:block" :value="3"> C. {{question.options['3']}}</a-radio>
                    <a-radio style="display:block" :value="4"> D. {{question.options['4']}}</a-radio>
                </a-radio-group>
            </a-card>
        </template>
      </a-layout-sider>
      <a-layout>
        <div class="content" style="text-align:center; height:100%">
            <a-layout-header>
                <a-input placeholder="題目名稱" style="width:80%" v-model="selectedQuestion.question"/>
            </a-layout-header>
            <a-layout-content style="margin:40px 0px">
            <a-radio-group name="radioGroup" :default-value="1" style="width: 80%;" v-model="selectedQuestion.answer">
            <div>
                <a-col class="gutter-row" :span="12">
                    <div class="gutter-box" style="padding: 40px 0px;">
                    <a-radio :value="1">
                        A. <a-input placeholder="選項a" v-model="options[1]"/>
                    </a-radio>
                    </div>
                </a-col>
                <a-col class="gutter-row" :span="12">
                    <div class="gutter-box" style="padding: 40px 0px;">
                    <a-radio :value="2">
                        B. <a-input placeholder="選項b" v-model="options[2]"/>
                        </a-radio>
                    </div>
                </a-col>
            </div>
            <div style="margin:50px 0px">
                <a-col class="gutter-row" :span="12">
                    <div class="gutter-box" style="padding: 50px 0px;">
                    <a-radio :value="3">
                        C. <a-input placeholder="選項c" v-model="options[3]"/>
                        </a-radio>
                    </div>
                </a-col>
                <a-col class="gutter-row" :span="12">
                    <div class="gutter-box" style="padding: 50px 0px;">
                    <a-radio :value="4">
                        D. <a-input placeholder="選項d" v-model="options[4]"/>
                        </a-radio>
                    </div>
                </a-col>            
            </div>
            </a-radio-group>
            </a-layout-content>
        <a-layout-footer>
            <a-button size="small" icon="delete" @click="clear">清除</a-button>
            <a-button size="small" type="primary" icon="plus" style="margin:20px" @click="addQuiz" :disabled="formVaild">確定</a-button>
        </a-layout-footer>
        </div>
      </a-layout>
    </a-layout>
</template>
<script>
export default {
  name: 'mngmtActivity',
  props: {
    activity: {
      type: Object,
      default: null
    }
  },
  created(){
    console.log(11123)
    console.log(this.activity)
  },
  data() {
    return {
        index: 0,
        selectedQuestion: {},
        question: '',
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: this.$form.createForm(this, { name: 'coordinated' }),
    }
    
  },
  computed: {
      formVaild(){
          return Object.values(this.questions).includes('')
      },
      questions(){
          console.log(this.activity.questions)
          return this.activity.questions
      },
      options(){
          if (this.selectedQuestion.options){
              return this.selectedQuestion.options   
          } else {
              return {'1':'', '2':'', '3':'', '4':''}
          }
      }
  },
  methods: {
    detail(){
      console.log("show detail")
    },
    edit(question){
        // console.log(quiz)
        this.selectedQuestion = question
    },
    addQuiz(){
        let _index = this.quizzes.map(e => { return e.index }).indexOf(this.index)
        console.log(_index)
        if (_index !== -1){
            let quiz = Object.assign({}, this.quiz)
            this.quizzes[_index] = quiz
            this.clear()
            return
        }
        this.quiz.index = this.index
        let quiz = Object.assign({}, this.quiz)
        console.log(this.quizzes)
        this.quizzes.push(quiz)
        this.index+=1
        this.clear()
    },
    clear(){
        Object.keys(this.quiz).map(key =>
          {
            if (key === 'answer'){
                this.quiz[key] = 1
            } else if (key !== 'index'){
                this.quiz[key] = ''
            }
          }
        )
    },
    remove(){
        this.quizzes.pop()
    },
    destroyed(){
        console.log("destroyed")
    }
  }
}
</script>
<style lang="scss">

#thumbnail {
    .ant-card-head{
        min-height: unset!important;
    }
    .ant-card-head-title {
        padding: 2px 0!important;
    }
    .ant-card-body {
        padding: 5px!important;
    }
}
.ant-layout-footer {
    background: unset!important;
}

.ant-layout-header{
    background: #1a62a7!important;
    /* width:40%!important; */
    height:unset!important;
}
.ant-layout-sider {
    background: #ececec!important;
    /* background: #405d79!important; */
    /* flex: 0 0 300px; */
    /* max-width: 300px!important;
    min-width: 300px!important;
    width: 300px!important; */
}
.content {
    /* content: ' '; */
    /* display: block; */
    /* position: absolute; */
    /* left: 0; */
    /* top: 0; */
    /* width: 50%; */
    /* height: 50%; */
    /* z-index: 1; */
    opacity: 0.9;
    /* background-image: url('../assets/bg.png'); */
    /* background-image: url('http://placekitten.com/1500/1000'); */
    /* background-repeat: no-repeat; */
    /* background-position: top center; */
    /* background-position: 50% 0; */
    /* -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover; */
    background-size: contain;
}
</style>