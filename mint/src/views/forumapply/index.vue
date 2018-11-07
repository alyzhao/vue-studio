<template>
  <div class="forum-apply">
    <!-- <div style="font-size: 1rem;color: #000;line-height: 2rem;">{{formData.openid}}</div> -->
    <Header title="论坛报名" :exist="exist"></Header>
    <div class="main">
      <mt-field :disabled="exist" label="公司名称" placeholder="请输入公司名称" v-model="formData.fcName"></mt-field>

      <mt-field :disabled="exist" label="地址" placeholder="请输入地址" v-model="formData.fcAdress"></mt-field>

      <mt-field :disabled="exist" label="联系人" placeholder="请输入联系人" v-model="formData.fcPeople"></mt-field>

      <mt-field :disabled="exist" label="职务" placeholder="请输入职务" v-model="formData.fcPost"></mt-field>

      <mt-field :disabled="exist" label="固话/手机" placeholder="请输入固话/手机" v-model="formData.fcPhone"></mt-field>

      <mt-field :disabled="exist" label="QQ号/微信号" placeholder="请输入QQ号/微信号" v-model="formData.fcQQ"></mt-field>

      <div class="apply-list" v-for="(item) in applyList" :key="item.uuid">
        <div class="mint-checklist-title">
          参会人员
          <mt-button v-if="!exist" type="danger" size="small" @click="deleteApply(item.uuid)"><i class="iconfont icon-delete"></i>删除</mt-button>
        </div>
        <mt-field :disabled="exist" label="姓名" placeholder="请输入姓名" v-model="item.fName"></mt-field>
        <mt-field label="性别" class="card-type">
          <mt-radio
            class="in-cell-radio"
            v-model="item.fSex"
            :options="sexOptions">
          </mt-radio>
        </mt-field>        
        <mt-field :disabled="exist" label="职务" placeholder="请输入职务" v-model="item.fPost"></mt-field>
        <mt-field :disabled="exist" label="选择套餐(可多选)" class="card-type">
          <mt-checklist
            class="in-cell-check"
            v-model="item.fPack"
            :options="fPackOptions">
          </mt-checklist>
        </mt-field>        
        <mt-field :disabled="exist" label="联系电话" placeholder="请输入联系电话" v-model="item.fPhone"></mt-field>
      </div>
      <div class="commom-buttom-wrap" v-if="!exist">
        <mt-button @click="addApply" class="submit-btn" type="primary" plain size="normal">添加参会人员</mt-button>
      </div>
    </div>
    <div class="about-forum">
      <p style="color: #333;font-size: 16px;">请在收到《参会确认书》后，核对参会人员姓名及费用，如无误，请在5个工作内转付相关费用，以便办理相关手续。</p>
      <mt-cell title="户  名：" value="广西地矿投资集团有限公司"></mt-cell>
      <mt-cell title="联系人：" value="陈女士"></mt-cell>
      <mt-cell title="开户行：" value="建行南宁园湖北路支行"></mt-cell>
      <mt-cell title="电话：" value="0771-2869518"></mt-cell>
      <mt-cell title="帐  号：" value="4500 1604 3530 5070 2797"></mt-cell>
      <mt-cell title="传真：" value="0771-5625979"></mt-cell>
      <p>相关说明:</p>
      <p>1.注册费:人民币800元/人，包括：参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等。</p>
      <p>套餐1服务:人民币1800元/人，包括：机场接送机和会务用车（限会期内推荐酒店和会议地点）、会期中、晚自助餐、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）</p>
      <p>套餐2服务:人民币2800元/人，包括：大会指定酒店住宿（3晚，1人/间，含早餐）、会期中、晚自助餐、机场接送机和会务用车（限会期内推荐酒店和会议地点）、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）。</p>
      <p>2. 参会人员请于11月14日08:00~22:00全天到南宁会展豪生大酒店注册报到！</p>
    </div>
    <div class="commom-buttom-wrap" v-if="!exist">
      <mt-button :disabled="confirmDisabled" @click="submit" class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import {fPackOptions} from 'constants/field'
  import cloneDeep from 'lodash.clonedeep'
  import { Indicator } from 'mint-ui'
  import qs from 'qs'
    /*String fName;//姓名
      String fPhone;//手机号码
      String fPack;//套餐     注册费:人民币800元/人 （传参：01）
            包括：参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等。
      
            套餐1服务:人民币1800元/人（传参：02） 
            包括：机场接送机和会务用车（限会期内推荐酒店和会议地点）、会期中/晚自助餐、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）

            套餐2服务:人民币2800元/人（传参：03） 
            包括：大会指定酒店住宿（3晚，1人/间，含早餐）、会期中/晚自助餐、机场接送机和会务用车（限会期内推荐酒店和会议地点）、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）。        
      String openid;  */
  export default {
    data () {
      return {
        formData: {
          fcName: '',
          fcAdress: '',
          fcPeople: '',
          fcPost: '',
          fcQQ: '',
          openid: '',
          fcPhone: ''
          // manyPeople: []     // 参会人员
        },
        applyList: [{
          uuid: this.uuid(),
          fName: '',
          fSex: '男',
          fPack: ['01'],
          fPost: '',
          fPhone: ''
        }],
        exist: true,
        // exist: false,
        fPackOptions: cloneDeep(fPackOptions),
        sexOptions: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }]
      }
    },
    created () {
      this.getOpenId().then(({data}) => {
        console.log('openid', data)
        let openid = data.openid
        if (openid) {
          this.formData.openid = openid
          this.loadData(openid)
        } else {
          this.getOpenIdError()
        }
      })
      .catch(this.getOpenIdError)

      // this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg10'
      // this.loadData(this.formData.openid)
    },
    methods: {
      addApply () {
        this.applyList.push({
          uuid: this.uuid(),
          fName: '',
          fSex: '男',
          fPack: ['01'],
          fPost: '',
          fPhone: ''
        })
        console.log(this.applyList)
      },
      deleteApply (uuid) {
        let index = this.applyList.findIndex(item => item.uuid === uuid)
        console.log(index)
        if (index != -1) {
          this.applyList.splice(index, 1)        
        }
      },
      loadData (openId) {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/queryForumById'
        this.axios.get(url, {params: {openid: openId}})
        .then(({data}) => {
          console.log('loadData', data)
          if (data.forumform) {
            this.exist = true
            this.setData(data.forumform)
          } else {
            this.exist = false
          }
        })
        .catch(this.serviceError)
      },
      setData (data) {
        Object.keys(this.formData).forEach(key => {
          this.formData[key] = data[key]            
        })
        this.applyList = data.ppList.map(item => {
          return {
            uuid: this.uuid(),
            fName: item.fName,
            fSex: item.fSex,
            fPack: item.fPack.split(','),
            fPost: item.fPost,
            fPhone: item.fPhone
          }
        })
      },
      submit () {
        if (!this.checkApplyList()) {
          this.Toast('请填写完整参会人员信息, 可删除多余的人员!')
          return
        }
        this.MessageBox.confirm('确定填写信息无误, 并提交吗?').then(action => {
          Indicator.open()
          let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/addForum'
          let params = cloneDeep(this.formData)
          let manyPeople = this.applyList.map(item => {
            let fPack = item.fPack.join(',')
            return {
              fPack,
              fName: item.fName,
              fSex: item.fSex,
              fPost: item.fPost,
              fPhone: item.fPhone
            }
          })
          params.manyPeople = JSON.stringify(manyPeople)
          console.log(params)
          this.axios.post(url, qs.stringify(params))
          .then(({data}) => {
            console.log(typeof data)
            if (data) {
              this.MessageBox.alert('提交成功').then(action => {
                console.log('success', data)
                window.location.href = '/page/tqhd/index.html'
              })
              .catch(err => console.log(err))            
            } else {
              // alert(data)
              this.serviceError()
            }
          })
          .catch(this.serviceError)
          .finally(() => {
            Indicator.close()
          })
        })
      },
      checkApplyList () {
        let validate = true
        for (let i = 0, length = this.applyList.length; i < length; i++) {
          let item = this.applyList[i]
          let validateItem = item.fName && item.fSex && item.fPost && item.fPack.length && item.fPhone
          if (!Boolean(validateItem)) {
            validate = false
            break
          }
        }
        return validate
      }
    },
    computed: {
      confirmDisabled () {
        let validate = this.formData.fcName &&
        this.formData.fcAdress &&
        this.formData.fcPeople &&
        this.formData.fcPost &&
        this.formData.fcQQ &&
        this.formData.fcPhone &&
        this.formData.openid;
        validate = Boolean(validate)
        console.log(validate)
        return !validate
      }      
    }
  }
</script>
<style lang="scss">
  .in-cell-check {
    .mint-checklist-title {
      display: none;
    }
    .mint-cell-wrapper {
      padding: 0;
      .mint-cell-title {
        width: 100%;
      }
    }
  }
  .in-cell-radio {
    .mint-radiolist-title {
      display: none;
    }
    .mint-cell-wrapper {
      padding: 0;
      .mint-cell-title {
        width: 100%;
      }
    }
  }
  .participate {

  }
  .card-type.big {
    .mint-cell-wrapper {
      flex-wrap: wrap;
      .mint-cell-value {
        width: 100%;
        .picker-item {
          font-size: 14px;
        }        
      }
    }
  }
  .bigger-checklist .mint-checklist-label {
    padding: 10px;
  }
  .about-forum {
    border-radius: 5px;
    border: 1px dashed #999;
    margin: 10px;
    p {
      font-size: 16px;
      margin: 5px 10px;
      line-height: 130%;
      font-size: 14px;
      color: #666;
    }
    .mint-cell {
      min-height: 38px;
    }
  }
  .apply-list {
    .mint-checklist-title {
      height: 30px;
      line-height: 30px;
      position: relative;
    }
    .mint-button--danger {
      height: 30px;
      font-size: 12px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>