<template>
  <c4it-scrollbar style="height: 100vh" is-vertical>
    <div id="app">
      <div class="btns">
        <c4it-button
          :loading="false"
          @click="buttonClickHandler"
          type="primary"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="primary"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="primary"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="primary">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="loadingtest"
          @click="testtest = !testtest"
          type="primary"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" :disabled="testtest" type="primary">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="primary"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="primary"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          @click="buttonClickHandler"
          type="primary"
          icon="arrow-alt-circle-up"
        />

        <c4it-button
          :loading="false"
          type="warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="warning">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="loadingtest"
          @click="testtest = !testtest"
          type="warning"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" :disabled="testtest" type="warning">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          type="success"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :aria="true"
          type="success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="success">
          中交智运
        </c4it-button>

        <c4it-button :loading="true" type="success">
          中交智运
        </c4it-button>

        <c4it-button :loading="false" disabled type="success">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          type="danger"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="danger">
          中交智运
        </c4it-button>

        <c4it-button :loading="true" type="danger">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          @click="buttonClickHandler"
          :disabled="true"
          type="danger"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          type="outline-default"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-default"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-default"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="outline-default">
          中交智运
        </c4it-button>

        <c4it-button :loading="true" type="outline-default">
          中交智运
        </c4it-button>

        <c4it-button :loading="false" disabled type="outline-default">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="outline-default"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="outline-default"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          type="outline-danger"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="outline-danger">
          中交智运
        </c4it-button>

        <c4it-button :loading="true" type="outline-danger">
          中交智运
        </c4it-button>

        <c4it-button :loading="false" disabled type="outline-danger">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="outline-danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="outline-danger"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          type="outline-success"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="outline-success">
          中交智运
        </c4it-button>

        <c4it-button :loading="true" type="outline-success">
          中交智运
        </c4it-button>

        <c4it-button :loading="false" disabled type="outline-success">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="outline-success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="outline-success"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button
          :loading="false"
          type="outline-warning"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          type="outline-warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button :loading="false" type="outline-warning">
          中交智运
        </c4it-button>

        <c4it-button :loading="true" type="outline-warning">
          中交智运
        </c4it-button>

        <c4it-button :loading="false" disabled type="outline-warning">
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          type="outline-warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          :loading="false"
          :ripple="true"
          :elevation="true"
          type="outline-warning"
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button type="dashed-default" prefix="arrow-alt-circle-up">
          中交智运
        </c4it-button>

        <c4it-button type="dashed-primary" prefix="arrow-alt-circle-up">
          中交智运
        </c4it-button>

        <c4it-button type="dashed-success" prefix="arrow-alt-circle-up">
          中交智运
        </c4it-button>

        <c4it-button type="dashed-danger" prefix="arrow-alt-circle-up">
          中交智运
        </c4it-button>

        <c4it-button type="dashed-warning" prefix="arrow-alt-circle-up">
          中交智运
        </c4it-button>
        <c4it-button
          type="dashed-default"
          disabled
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          type="dashed-primary"
          disabled
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button
          type="dashed-success"
          disabled
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>

        <c4it-button type="dashed-danger" disabled prefix="arrow-alt-circle-up">
          中交智运
        </c4it-button>

        <c4it-button
          type="dashed-warning"
          disabled
          prefix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </div>

      <div class="btns">
        <c4it-button type="text-primary">
          中交智运
        </c4it-button>

        <c4it-button type="text-danger">
          中交智运
        </c4it-button>

        <c4it-button type="text-warning">
          中交智运
        </c4it-button>

        <c4it-button type="text-success">
          中交智运
        </c4it-button>

        <c4it-button type="text-primary" disabled>
          中交智运
        </c4it-button>

        <c4it-button type="text-danger" disabled>
          中交智运
        </c4it-button>

        <c4it-button type="text-warning" disabled>
          中交智运
        </c4it-button>

        <c4it-button type="text-success" disabled>
          中交智运
        </c4it-button>
      </div>

      <!-- <c4it-form :inline="true" :model="formInline" class="demo-form-inline">
        <c4it-form-item label="审批人">
          <c4it-input v-model="formInline.user" placeholder="审批人">
          </c4it-input>
        </c4it-form-item>
        <c4it-form-item label="活动区域">
          <c4it-input v-model="formInline.region" placeholder="活动区域">
          </c4it-input>
        </c4it-form-item>
        <c4it-form-item>
          <c4it-button @click="onSubmit" style="margin-top: 4px" type="primary">
            查询
          </c4it-button>
        </c4it-form-item>
      </c4it-form> -->
      <!-- <c4it-form ref="ruleForm" :model="ruleForm" :rules="rules" class="form">
        <c4it-form-item ref="ruleFormItem" label="活动名称" prop="name">
          <c4it-input v-model="ruleForm.name"></c4it-input>
        </c4it-form-item>
        <c4it-form-item label="活动描述" prop="textarea">
          <c4it-textarea v-model="ruleForm.textarea" type="textarea">
          </c4it-textarea>
        </c4it-form-item>
        <c4it-form-item label="选择框" prop="checkBox">
          <c4it-checkbox-group v-model="ruleForm.checkBox">
            <c4it-checkbox
              v-for="(country, idx) in countriesList"
              :value="country.value"
              :label="country.label"
              :aria="true"
              :key="idx"
            />
          </c4it-checkbox-group>
        </c4it-form-item>
        <c4it-form-item label="选中" prop="checked">
          <c4it-checkbox v-model="ruleForm.checked">
            备选项
          </c4it-checkbox>
        </c4it-form-item>
        <c4it-form-item label="单选框" prop="radioGroups">
          <c4it-radio-group v-model="ruleForm.radioGroups">
            <c4it-radio name="city" value="boston">
              boston
            </c4it-radio>
            <c4it-radio name="city" value="los angels">
              los angels
            </c4it-radio>
            <c4it-radio name="city" value="montreal">
              montreal
            </c4it-radio>
          </c4it-radio-group>
        </c4it-form-item>
        <c4it-form-item label="select选择" prop="list">
          
        </c4it-form-item>
        <c4it-form-item label="select选择" prop="list2">
         
        </c4it-form-item>

        <c4it-form-item label="select选择" prop="list3">
          <c4it-cascader
            v-model="ruleForm.list3"
            :editable="false"
            :options="options1"
            prefix="search"
            placeholder="please select"
            suffix="angle-down"
          />
        </c4it-form-item>

        <c4it-form-item label="时间选择" prop="date">
          <c4it-datepicker
            v-model="ruleForm.date"
            placeholder="please select"
            suffix="calendar"
          />
        </c4it-form-item>
        <c4it-form-item label="时间选择2" prop="dateTime">
          <c4it-datepicker
            v-model="ruleForm.dateTime"
            @change="changeHandler"
            @confirm="confirmHandler"
            :timepicker="true"
            placeholder="please select"
            suffix="calendar"
          />
        </c4it-form-item>
        <c4it-form-item label="时间选择3" prop="time3">
          <c4it-timepicker
            v-model="ruleForm.time3"
            @change="changeHandler"
            @confirm="confirmHandler"
            placeholder="请选择时间"
            suffix="clock"
          />
        </c4it-form-item>

        <c4it-form-item class="button-wrap">
          <c4it-button @click="submitForm('ruleForm')" type="primary">
            立即创建
          </c4it-button>
          <c4it-button @click="resetForm('ruleForm')">
            重置
          </c4it-button>
          <c4it-button @click="clear('ruleForm')">
            清除
          </c4it-button>
          <c4it-button @click="validateOne('ruleForm', 'name')">
            校验一个
          </c4it-button>
          <c4it-button @click="resetFormItem('ruleFormItem')">
            清除一个
          </c4it-button>
        </c4it-form-item>
      </c4it-form> -->

      <div class="checkbox">
        <c4it-checkbox
          v-model="checked1"
          @change="checkedHandler"
          :aria="false"
          shape="circle"
        >
          China
        </c4it-checkbox>
        <c4it-checkbox
          v-model="checked1"
          @change="checkedHandler"
          :aria="false"
          :disabled="true"
          shape="circle"
        >
          China
        </c4it-checkbox>
      </div>
      <div class="checkbox">
        <c4it-checkbox v-model="checked2" :aria="true" @change="checkedHandler">
          China
        </c4it-checkbox>
      </div>
      <div class="checkbox">
        <c4it-checkbox
          :indeterminate="true"
          v-model="checked3"
          @change="checkedHandler"
        >
          China
        </c4it-checkbox>
      </div>
      <div class="checkbox">
        <c4it-checkbox
          :indeterminate="false"
          :checked="true"
          v-model="checked3"
          @change="checkedHandler"
          disabled
        >
          China
        </c4it-checkbox>
      </div>

      <div class="checkbox-group">
        <c4it-checkbox
          :indeterminate="isIndeterminate4"
          v-model="checked4"
          @change="checkedHandlerGroup"
          :aria="true"
        >
          checkAll
        </c4it-checkbox>
        <c4it-checkbox-group
          v-model="checkedCountry"
          @change="checkedHandlerCountries"
        >
          <c4it-checkbox
            v-for="(country, idx) in countriesList"
            :value="country.value"
            :label="country.label"
            :aria="true"
            :key="idx"
          />
        </c4it-checkbox-group>
        <div>{{ checkedCountry }}</div>
      </div>

      <div class="radio">
        <c4it-radio v-model="radio1" value="boston" disabled>
          boston
        </c4it-radio>
      </div>
      <div class="radio-group">
        <c4it-radio-group v-model="radio2" @change="radioHandler">
          <c4it-radio name="city" value="boston">
            boston
          </c4it-radio>
          <c4it-radio name="city" value="los angels" disabled>
            los angels
          </c4it-radio>
          <c4it-radio name="city" value="montreal">
            montreal
          </c4it-radio>
        </c4it-radio-group>
        <div>{{ radio2 }}</div>
      </div>
      <div class="switch">
        <c4it-switch
          v-model="switch1"
          :disabled="testtest"
          @change="switchHandler"
        ></c4it-switch>
        <div>{{ switch1 }}</div>
      </div>

      <div class="switch">
        <c4it-switch
          v-model="switch1"
          :disabled="testtest"
          @change="switchHandler"
          on-text="开启"
          off-text="关闭关闭关闭"
        ></c4it-switch>
        <div>{{ switch1 }}</div>
      </div>

      <!-- <div class="progress">
        <c4it-progress-circle :progress="progress1" :radius="62" :stroke="8" />
        <c4it-progress-bar
          :max="100"
          :value="valueTest"
          color="#FF0000"
          label="test"
          position="top-end"
        />
      </div>
      <div class="range-slider">
        <c4it-range-slider
          v-model="range1"
          :max="100"
          :min="0"
          :step="1"
          @change="rangeSliderHandler"
        ></c4it-range-slider>
      </div> -->
      <div class="input" style="margin: 20px;">
        <c4it-input
          v-model.trim="input1"
          @input="inputHandler"
          :type="type"
          :prefix="true"
          :suffix="true"
          placeholder="请输入"
          style="marginTop: 20px"
        >
          <template v-slot:prefix>
            <div class="prefix">
              <c4it-button type="primary" prefix="arrow-alt-circle-up">
                中交智运
              </c4it-button>
            </div>
          </template>
          <template v-slot:suffix>
            <div class="suffix">
              <c4it-button type="primary" prefix="arrow-alt-circle-up">
                中交智运
              </c4it-button>
            </div>
          </template>
        </c4it-input>

        <c4it-input
          v-model.trim="input1"
          @input="inputHandler"
          :type="type"
          :prefix="true"
          :suffix="true"
          :disabled="disabledTest"
          placeholder="请输入"
          style="marginTop: 20px"
        >
          <template v-slot:prefix>
            <div class="prefix">
              <c4it-button
                :disabled="disabledTest"
                type="primary"
                prefix="arrow-alt-circle-up"
              >
                中交智运
              </c4it-button>
            </div>
          </template>
          <template v-slot:suffix>
            <div class="suffix">
              <c4it-button
                :disabled="disabledTest"
                type="primary"
                prefix="arrow-alt-circle-up"
              >
                中交智运
              </c4it-button>
            </div>
          </template>
        </c4it-input>

        <c4it-input
          v-model="input2"
          @input="inputHandler"
          suffix="date"
          prefix="search"
          placeholder="请输入"
          style="marginTop: 20px"
        ></c4it-input>

        <c4it-input
          v-model="input2"
          @input="inputHandler"
          :disabled="disabledTest"
          suffix="date"
          prefix="search"
          placeholder="请输入"
          style="marginTop: 20px"
        ></c4it-input>

        <c4it-input
          :sufLoading="true"
          v-model="input3"
          @input="inputHandler"
          suffix="search"
          disabled
          placeholder="请输入"
          style="marginTop: 20px"
        ></c4it-input>

        <c4it-input
          :preLoading="false"
          :sufLoading="false"
          v-model="input4"
          @input="inputHandler"
          prefix="search"
          placeholder="搜索..."
          style="marginTop: 20px; width: 100px"
        ></c4it-input>
      </div>

      <div class="dropdowns" style="margin-top: 80px;">
        <div style="display: flex">
          <c4it-dropdown
            v-model="input1"
            :options="options"
            suffix="angle-down"
            label="下拉菜单"
            type="text"
          />

          <c4it-dropdown
            v-model="input1"
            :options="options"
            :disabled="true"
            suffix="angle-down"
            label="下拉菜单"
            type="text"
          />

          <c4it-dropdown
            v-model="input1"
            :options="options"
            :disabled="disabledTest"
            suffix="angle-down"
            label="下拉菜单"
            type="text"
          />

          <c4it-dropdown
            v-model="input1"
            :options="options"
            suffix="angle-down"
            label="下拉菜单"
          />

          <c4it-dropdown
            v-model="input1"
            :options="options"
            :disabled="true"
            suffix="angle-down"
            label="下拉菜单"
          />
        </div>

        <div class="dropdowns" style="margin-top: 20px; display: flex">
          <div style="width: 150px; marginRight: 12px; marginLeft: 12px;">
            <c4it-select
              v-model="input3"
              :options="options"
              :disabled="false"
              placeholder="请从列表中选择"
              suffix="angle-down"
            />
          </div>
          <div style="width: 200px">
            <c4it-select
              v-model="list"
              :options="options4"
              :disabled="false"
              :multiple="true"
              placeholder="请从列表中选择"
              suffix="angle-down"
            />
          </div>
          <div style="width: 200px">
            <c4it-select
              v-model="option1"
              :options="options"
              :disabled="disabledTest"
              :multiple="true"
              placeholder="请从列表中选择"
              suffix="angle-down"
            />
          </div>
          <div style="width: 200px">
            <c4it-select
              v-model="input5"
              :options="options"
              :disabled="disabledTest"
              placeholder="请从列表中选择"
              suffix="angle-down"
            />
          </div>
        </div>
      </div>

      <div class="cascader">
        <c4it-cascader
          v-model="input12"
          @input="inputHandler"
          @change="changeHandler"
          @index="indexHandler"
          :options="options1"
          :sufLoading="loadingtest"
          placeholder="请选择"
          suffix="angle-down"
          style="margin: 0 4px"
        />
        <c4it-cascader
          v-model="input13"
          @input="inputHandler"
          @change="changeHandler"
          @index="indexHandler"
          :options="options1"
          placeholder="请选择"
          suffix="angle-down"
          style="margin: 0 4px"
          disabled
        />
      </div>

      <div class="datepicker" style="margin: 20px; width: 200px">
        <c4it-datepicker
          v-model="input10"
          @change="changeHandler"
          @confirm="confirmHandler"
          :disabled="false"
          placeholder="选择日期"
          suffix="date"
        />
      </div>

      <div class="timepicker" style="margin: 20px; width: 200px">
        <c4it-timepicker
          v-model="input11"
          @change="changeHandler"
          @confirm="confirmHandler"
          :disabled="false"
          placeholder="请选择时间"
          suffix="clock"
        />
      </div>

      <div class="datepicker" style="margin: 20px; width: 200px">
        <c4it-datetimepicker
          v-model="input12"
          @change="changeHandler"
          @confirm="confirmHandler"
          :disabled="false"
          placeholder="选择日期"
          suffix="date"
        />
      </div>

      <div class="datepicker" style="margin: 20px; width: 400px">
        <c4it-datetimerangepicker
          :placeholder="['开始日期', '结束日期']"
          :disabled="false"
          suffix="date"
        />
      </div>

      <c4it-accordion title="查看代码">
        <template v-slot:header>
          <div @click.stop="test">
            一层
          </div>
        </template>
        <c4it-scrollbar :height="100" is-vertical>
          <c4it-cascader
            v-model="input12"
            @input="inputHandler"
            @change="changeHandler"
            @focus="focusHander"
            @blur="blurHandler"
            :editable="false"
            :options="options1"
            type="text"
            placeholder="please select"
            suffix="angle-down"
          />
        </c4it-scrollbar>
      </c4it-accordion>
      <c4it-accordion title="查看代码">
        <template v-slot:header>
          <div @click.stop="test">
            二层
          </div>
        </template>
        <c4it-scrollbar :height="100" is-vertical>
          <div class="text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
          </div>
        </c4it-scrollbar>
      </c4it-accordion>

      <div class="modal">
        <c4it-button @click="modalHandler" type="text">
          开关
        </c4it-button>
        <c4it-modal :open="open1" @close="closeHandler">
          <div @click.stop.prevent class="dialog">
            <div class="c4it-modal-header">
              <div class="header-wrapper">
                <div class="title">
                  this is header
                </div>
                <svg-icon
                  @click.stop="closeHandler"
                  icon-class="times"
                ></svg-icon>
              </div>
            </div>
            <div class="c4it-modal-body">
              <div class="body-wrapper">
                <div class="content">
                  this is body
                </div>
              </div>
            </div>
            <div class="c4it-modal-footer">
              <div class="footer-wrapper">
                <div class="btns">
                  <c4it-button @click.stop="closeHandler" type="text">
                    取消
                  </c4it-button>
                  <c4it-button @click.stop="closeHandler" type="primary">
                    确定
                  </c4it-button>
                </div>
              </div>
            </div>
          </div>
        </c4it-modal>
      </div>

      <div class="upload">
        <c4it-upload
          @change="uploadHandler"
          v-model="upload1"
          icon="arrow-alt-circle-up"
        >
          上传文件
        </c4it-upload>
        <div v-for="(file, idx) in files" :key="idx">
          {{ file.name }}
        </div>
      </div>

      <div class="upload">
        <c4it-upload
          @change="uploadHandler"
          v-model="upload1"
          :disabled="true"
          icon="arrow-alt-circle-up"
        >
          上传文件
        </c4it-upload>
        <div v-for="(file, idx) in files" :key="idx">
          {{ file.name }}
        </div>
      </div>

      <c4it-badge :count="444">
        <c4it-button
          :loading="false"
          @click="buttonClickHandler"
          type="primary"
          prefix="arrow-alt-circle-up"
          suffix="arrow-alt-circle-up"
        >
          中交智运
        </c4it-button>
      </c4it-badge>

      <div class="nav">
        <div class="nav-item">
          <c4it-scrollbar
            @exec="execHandler"
            :useThrottle="false"
            :throttle="4000"
            is-vertical
          >
            <c4it-tree
              :treeData="treeData"
              @fetch-data="fetchDataHandler"
              @remove-data="removeDataHandler"
            />
          </c4it-scrollbar>
        </div>

        <div class="nav-item">
          <c4it-scrollbar is-vertical>
            <c4it-nav
              :nav="menu1"
              :collapse="true"
              @router-name="routerNameHandler($event)"
              @router-index="routerIndexHandler"
            />
          </c4it-scrollbar>
        </div>

        <div class="nav-item">
          <c4it-scrollbar is-vertical>
            <c4it-nav
              :nav="menu1"
              :collapse="true"
              @router-name="routerNameHandler($event)"
              @router-index="routerIndexHandler"
              theme="light"
            />
          </c4it-scrollbar>
        </div>

        <div class="nav-item">
          <c4it-scrollbar is-vertical>
            <c4it-nav
              :nav="menu1"
              :collapse="false"
              @router-name="routerNameHandler($event)"
              @router-index="routerIndexHandler"
            />
          </c4it-scrollbar>
        </div>

        <div class="nav-item">
          <c4it-scrollbar is-vertical>
            <c4it-nav
              :nav="menu1"
              :collapse="false"
              @router-name="routerNameHandler($event)"
              @router-index="routerIndexHandler"
              theme="light"
            />
          </c4it-scrollbar>
        </div>
      </div>

      <div class="table">
        <div class="item">
          <c4it-table :items="items" :fields="fields" />
        </div>
        <div class="item">
          <c4it-table :items="items" :fields="fields" stripped />
        </div>
        <div class="item">
          <c4it-table
            :items="items"
            :fields="fields"
            :fixed-header="true"
            :height="200"
          />
        </div>
        <div class="item">
          <c4it-table :items="items" :fields="fields">
            <template v-slot:last_name="item">
              <a href="www.baidu.com" target="_blank">{{
                item.row.last_name
              }}</a>
            </template>
          </c4it-table>
        </div>

        <div class="item">
          <c4it-table :items="items" :fields="fields">
            <template v-slot:button="item">
              <c4it-button
                :loading="false"
                :ripple="true"
                @click="showDetails(item)"
                type="primary"
              >
                中交智运
              </c4it-button>
            </template>

            <template v-slot:row-details="item">
              <div class="row-details">
                <div class="info">
                  <div class="last-name">
                    <label for="">
                      Last Name:
                    </label>
                    {{ item.row.last_name }}
                  </div>
                  <div class="first-name">
                    <label for="">
                      First Name:
                    </label>
                    {{ item.row.first_name }}
                  </div>
                </div>
              </div>
            </template>
          </c4it-table>
        </div>

        <div class="item">
          <c4it-table
            :items="items"
            :fields="fields"
            :fixed-column="true"
            :width="700"
            column-name="age"
          >
            <template v-slot:button="">
              <c4it-button :loading="false" :ripple="true" type="primary">
                中交智运
              </c4it-button>
            </template>
          </c4it-table>
        </div>

        <div class="item">
          <c4it-table :items="items" :fields="fields" :drag="true">
            <template v-slot:first_name="">
              <c4it-input
                v-model="input3"
                @input="inputHandler"
                suffix="search"
                placeholder="请输入"
              ></c4it-input>
            </template>

            <template v-slot:age="item">
              <c4it-datepicker
                v-model="input10"
                @input="inputHandler(item)"
                @change="changeHandler"
                @focus="focusHander"
                @blur="blurHandler"
                placeholder="please select"
                suffix="calendar"
              />
            </template>

            <template v-slot:button="">
              <c4it-button :loading="false" :ripple="true" type="primary">
                中交智运
              </c4it-button>
            </template>
          </c4it-table>
        </div>
      </div>
      <div style="margin-bottom: 30px">
        <c4it-pagination
          @current-change="current_change"
          :totalCount="totalCount"
          :current="current"
          :size="size"
        ></c4it-pagination>
      </div>
    </div>
  </c4it-scrollbar>
</template>

<script>
import c4itButton from '@/components/Button/Index.vue';
import c4itCheckbox from '@/components/Checkbox/Index.vue';
import c4itCheckboxGroup from '@/components/CheckboxGroup/Index.vue';
import c4itProgressCircle from '@/components/Progress/Circle/Index.vue';
import c4itProgressBar from '@/components/Progress/Bar/Index.vue';
import c4itRadioGroup from '@/components/RadioGroup/Index.vue';
import c4itRadio from '@/components/Radio/Index.vue';
import c4itSwitch from '@/components/Switch/Index.vue';
import c4itRangeSlider from '@/components/RangeSlider/Index.vue';
import c4itInput from '@/components/Input/Index.vue';
import c4itTextarea from '@/components/Textarea/Index.vue';
import c4itDropdown from '@/components/Dropdown/Index.vue';
import c4itSelect from '@/components/Select/Index.vue';
// import c4itDropdownList from '@/components/DropdownList/Index.vue';
import c4itDatepicker from '@/components/DatePicker/Index.vue';
import c4itTimepicker from '@/components/TimePicker/Index.vue';
import c4itDatetimepicker from '@/components/DatetimePicker/Index.vue';
import c4itDatetimerangepicker from '@/components/DatetimeRangePicker/Index.vue';
import c4itScrollbar from '@/components/Scrollbar/Index.vue';
import c4itUpload from '@/components/Upload/Index.vue';
import c4itAccordion from '@/components/Accordion/Index.vue';
import c4itNavItem from '@/components/NavItem/Index.vue';
import c4itAccordionGroup from '@/components/AccordionGroup/Index.vue';
import c4itCascader from '@/components/Cascader/Index.vue';
// import c4itCascaderList from '@/components/CascaderList/Index.vue';
import c4itNav from '@/components/Nav/Index.vue';
import c4itTable from '@/components/Table/Index.vue';
import c4itModal from '@/components/Modal/Index.vue';
import c4itTree from '@/components/Tree/Index.vue';
import c4itBadge from '@/components/Badge/Index.vue';
import c4itPagination from '@/components/Pagination/Index.vue';
import c4itForm from '@/components/Form/Index.vue';
import c4itFormItem from '@/components/FormItem/Index.vue';
import deepClone from '@/utils/deepClone';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

export default {
  components: {
    c4itButton,
    c4itCheckbox,
    c4itProgressCircle,
    c4itProgressBar,
    c4itCheckboxGroup,
    c4itRadio,
    c4itRadioGroup,
    c4itSwitch,
    c4itRangeSlider,
    c4itInput,
    c4itTextarea,
    c4itForm,
    c4itFormItem,
    c4itDropdown,
    c4itSelect,
    // c4itDropdownList,
    c4itDatepicker,
    c4itTimepicker,
    c4itDatetimepicker,
    c4itDatetimerangepicker,
    c4itScrollbar,
    c4itUpload,
    c4itAccordion,
    c4itAccordionGroup,
    c4itCascader,
    // c4itCascaderList,
    c4itNav,
    c4itTable,
    c4itModal,
    c4itTree,
    c4itBadge,
    c4itNavItem,
    c4itPagination
  },
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      ruleForm: {
        name: '',
        checkBox: ['usa', 'japan'],
        checked: false,
        radioGroups: 'montreal',
        list: [],
        textarea: '',
        date: '',
        dateTime: '',
        time3: '',
        list2: '',
        list3: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ],
        textarea: [
          { required: true, message: '请输入活动描述', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        checkBox: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个',
            trigger: 'change'
          }
        ],
        checked: [
          { required: true, message: '请选择checked', trigger: 'change' }
        ],
        date: [{ required: true, message: '请选择date', trigger: 'blur' }],
        dateTime: [
          { required: true, message: '请选择dateTime', trigger: 'change' }
        ],
        time3: [{ required: true, message: '请选择time', trigger: 'change' }],
        radioGroups: [
          { required: true, message: '请选择radioGroups', trigger: 'change' }
        ],
        list: [
          {
            type: 'array',
            required: true,
            message: '请选择select',
            trigger: 'change'
          }
        ],
        list2: [
          {
            required: true,
            message: '请选择select222222',
            trigger: 'blur'
          }
        ],
        list3: [
          {
            required: true,
            message: '请选择select33333',
            trigger: 'change'
          }
        ]
      },
      totalCount: 100,
      current: 1,
      size: 10,
      open1: false,
      checked1: false,
      checked2: false,
      checked3: true,
      checked4: false,
      addedId: null,
      removedId: null,
      loadingtest: true,
      radio1: true,
      radio2: 'montreal',
      switch1: false,
      range1: 20,
      input1: 'erefer',
      type: 'text',
      suffix: 'search',
      valueTest: 20,
      disabledTest: false,
      input2: '',
      input3: '',
      input4: '',
      input5: 'human resource',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      input12: '',
      input13: '',
      input14: '',
      input15: '',
      input16: '',
      input17: [],
      option1: ['research & development', 'human resource', 'public affairs'],
      list: [],
      collapse1: false,
      collapse2: false,
      sufLoading7: false,
      sufLoading9: false,
      isIndeterminate4: false,
      progress1: 0,
      progress2: 0,
      upload1: false,
      testtest: false,
      files: [],
      selected: [1, 2, 3],
      provinceList: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
      ],
      cityList: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 }
      ],
      districtList: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 }
      ],
      checkedCountry: ['usa', 'japan'],
      countriesList: [
        { value: 'usa', label: 'USA' },
        { value: 'japan', label: 'Japan' },
        { value: 'germany', label: 'Germany' },
        { value: 'france', label: 'France' }
      ],
      options: [
        {
          value: 'research & development',
          label: '科技研发中心',
          type: 'primary'
        },
        { value: 'human resource', label: '人力资源部', type: 'primary' },
        { value: 'public affairs', label: '公共事务部', type: 'primary' },
        { value: 'logistics', label: '物流事业部', type: 'danger' },
        { value: 'finance', label: '财务部', type: 'danger disabled' },
        {
          value: 'strategic planning',
          label: '战略发展部',
          type: 'primary disabled'
        },
        { value: 'marketing', label: '市场部', type: 'primary' }
      ],
      options4: [
        {
          value: 'research & development',
          label: '科技研发中心',
          type: 'primary'
        },
        { value: 'human resource', label: '人力资源部', type: 'primary' },
        { value: 'public affairs', label: '公共事务部', type: 'primary' },
        { value: 'finance', label: '财务部', type: 'disabled' },
        {
          value: 'strategic planning',
          label: '战略发展部',
          type: 'disabled'
        },
        { value: 'marketing', label: '市场部', type: 'primary' }
      ],
      options2: [
        { value: 'logout', label: '登录' },
        { value: 'logout1', label: '登录1' },
        { value: 'logout2', label: '登录2' }
      ],
      options3: [
        {
          value: 'guide',
          label: '指南',
          children: [
            {
              value: 'disciplines',
              label: '设计原则',
              children: [
                {
                  value: 'consistency',
                  label: '一致性'
                },
                {
                  value: 'feedback',
                  label: '反馈'
                },
                {
                  value: 'efficiency',
                  label: '开发效率'
                },
                {
                  value: 'controllability',
                  label: '可控性'
                }
              ]
            },
            {
              value: 'navigation',
              label: '导航栏',
              children: [
                {
                  value: 'side nav',
                  label: '侧边导航'
                },
                {
                  value: 'top nav',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'component',
          label: '组件库',
          children: [
            {
              value: 'basic',
              label: '基本',
              children: [
                {
                  value: 'layout',
                  label: '布局'
                },
                {
                  value: 'color',
                  label: '颜色'
                },
                {
                  value: 'typography',
                  label: '字体'
                },
                {
                  value: 'icon',
                  label: '图标'
                },
                {
                  value: 'button',
                  label: '按钮'
                }
              ]
            },
            {
              value: 'form',
              label: '图表',
              children: [
                {
                  value: 'radio',
                  label: '单选框'
                },
                {
                  value: 'checkbox',
                  label: '多选框'
                },
                {
                  value: 'input',
                  label: '输入框'
                },
                {
                  value: 'input-number',
                  label: '数字输入'
                },
                {
                  value: 'select',
                  label: '选择'
                },
                {
                  value: 'cascader',
                  label: '下拉联级选择'
                },
                {
                  value: 'switch',
                  label: '开关'
                },
                {
                  value: 'time-picker',
                  label: '时间选择器'
                },
                {
                  value: 'date-picker',
                  label: '日期选择器'
                },
                {
                  value: 'upload',
                  label: '上传'
                },
                {
                  value: 'rate',
                  label: '评分'
                }
              ]
            },
            {
              value: 'data',
              label: '数据',
              children: [
                {
                  value: 'table',
                  label: '表格'
                },
                {
                  value: 'progress',
                  label: '进度条'
                },
                {
                  value: 'tree',
                  label: '树形结构'
                },
                {
                  value: 'pagination',
                  label: '分页'
                },
                {
                  value: 'badge',
                  label: '徽章'
                }
              ]
            },
            {
              value: 'notice',
              label: '通知',
              children: [
                {
                  value: 'message',
                  label: '信息'
                },
                {
                  value: 'notification',
                  label: '通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: '导航',
              children: [
                {
                  value: 'menu',
                  label: '菜单栏'
                },
                {
                  value: 'tabs',
                  label: '标签页'
                },
                {
                  value: 'breadcrumb',
                  label: '面包屑'
                },
                {
                  value: 'dropdown',
                  label: '下拉框'
                },
                {
                  value: 'steps',
                  label: '步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: '其他',
              children: [
                {
                  value: 'dialog',
                  label: '对话框'
                },
                {
                  value: 'carousel',
                  label: '走马灯'
                },
                {
                  value: 'accordions',
                  label: '风琴'
                }
              ]
            }
          ]
        }
      ],
      treeData: [],
      mock: [
        {
          name: faker.address.state(),
          hasChildren: true,
          showChildren: false,
          id: faker.random.uuid(),
          suffnum: '32321',
          prenum: '2323',
          type: 'test',
          children: []
        },

        {
          name: faker.address.state(),
          hasChildren: true,
          showChildren: false,
          id: faker.random.uuid(),
          suffnum: '454545',
          prenum: '123',
          type: 'test',
          children: []
        }
      ],
      options1: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency'
                },
                {
                  value: 'controllability',
                  label: 'Controllabilitydfsdfsdfsdfsdfsdfsdfdsfdsfsdfsdf'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation'
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation'
                }
              ]
            }
          ]
        },
        {
          value: 'guide',
          label: 'Guide'
        },
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency'
                },
                {
                  value: 'controllability',
                  label: 'Controllabilitydfsdfsdfsdfsdfsdfsdfdsfdsfsdfsdf'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation'
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation'
                }
              ]
            }
          ]
        },
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency'
                },
                {
                  value: 'controllability',
                  label: 'Controllabilitydfsdfsdfsdfsdfsdfsdfdsfdsfsdfsdf'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation'
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation'
                }
              ]
            }
          ]
        },
        {
          value: 'component',
          label: 'Component',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout'
                },
                {
                  value: 'color',
                  label: 'Color'
                },
                {
                  value: 'typography',
                  label: 'Typography'
                },
                {
                  value: 'icon',
                  label: 'Icon'
                },
                {
                  value: 'button',
                  label: 'Button'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox'
                },
                {
                  value: 'input',
                  label: 'Input'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber'
                },
                {
                  value: 'select',
                  label: 'Select'
                },
                {
                  value: 'cascader',
                  label: 'Cascader'
                },
                {
                  value: 'switch',
                  label: 'Switch'
                },
                {
                  value: 'slider',
                  label: 'Slider'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                },
                {
                  value: 'upload',
                  label: 'Upload'
                },
                {
                  value: 'rate',
                  label: 'Rate'
                },
                {
                  value: 'form',
                  label: 'Form'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table'
                },
                {
                  value: 'tag',
                  label: 'Tag'
                },
                {
                  value: 'progress',
                  label: 'Progress'
                },
                {
                  value: 'tree',
                  label: 'Tree'
                },
                {
                  value: 'pagination',
                  label: 'Pagination'
                },
                {
                  value: 'badge',
                  label: 'Badge'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert'
                },
                {
                  value: 'loading',
                  label: 'Loading'
                },
                {
                  value: 'message',
                  label: 'Message'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox'
                },
                {
                  value: 'notification',
                  label: 'Notification'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu'
                },
                {
                  value: 'tabs',
                  label: 'Tabs'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown'
                },
                {
                  value: 'steps',
                  label: 'Steps'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip'
                },
                {
                  value: 'popover',
                  label: 'Popover'
                },
                {
                  value: 'card',
                  label: 'Card'
                },
                {
                  value: 'carousel',
                  label: 'Carousel'
                },
                {
                  value: 'collapse',
                  label: 'Collapse'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      menu2: [
        {
          label: '文章管理'
        },
        {
          label: '评论管理'
        },
        {
          label: '举报管理'
        }
      ],
      menu3: [],

      menu1: [
        {
          name: 'content-management',
          meta: {
            title: '内容管理',
            prefix: 'css3',
            suffix: 'angle-down',
            active: true,
            anchor: false
          },
          children: [
            {
              name: 'article-management',
              meta: {
                title: '文章管理',
                prefix: '',
                suffix: '',
                active: true,
                anchor: true
              }
            },
            {
              name: 'comments-management',
              meta: {
                title: '评论管理',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            },
            {
              name: 'report-management',
              meta: {
                title: '举报管理',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            }
          ]
        },
        {
          name: 'user-management',
          meta: {
            title: '用户管理',
            prefix: 'html5',
            suffix: 'angle-down',
            active: false,
            anchor: false
          },
          children: [
            {
              name: 'add-user',
              meta: {
                title: '新增用户',
                prefix: '',
                suffix: 'angle-down',
                active: false,
                anchor: false
              },
              children: [
                {
                  name: 'backup-user',
                  meta: {
                    title: '用户存留',
                    prefix: '',
                    suffix: 'angle-down',
                    active: false,
                    anchor: false
                  },
                  children: [
                    {
                      name: 'test-1',
                      meta: {
                        title: '测试1',
                        prefix: '',
                        suffix: '',
                        active: false,
                        anchor: false
                      }
                    }
                  ]
                },
                {
                  name: 'deactive-user',
                  meta: {
                    title: '流失用户',
                    prefix: '',
                    suffix: 'angle-down',
                    active: false,
                    anchor: false
                  },
                  children: [
                    {
                      name: 'test-2',
                      meta: {
                        title: '测试2',
                        prefix: '',
                        suffix: '',
                        active: false,
                        anchor: false
                      }
                    }
                  ]
                }
              ]
            },
            {
              name: 'active-user',
              meta: {
                title: '活跃用户',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              },
              children: [
                {
                  name: 'backup-user-1',
                  meta: {
                    title: '用户存留1',
                    prefix: '',
                    suffix: 'angle-down',
                    active: false,
                    anchor: false
                  },
                  children: [
                    {
                      name: 'test-1',
                      meta: {
                        title: '测试1',
                        prefix: '',
                        suffix: '',
                        active: false,
                        anchor: false
                      }
                    }
                  ]
                },
                {
                  name: 'deactive-user',
                  meta: {
                    title: '流失用户',
                    prefix: '',
                    suffix: 'angle-down',
                    active: false,
                    anchor: false
                  },
                  children: [
                    {
                      name: 'test-2',
                      meta: {
                        title: '测试2',
                        prefix: '',
                        suffix: '',
                        active: false,
                        anchor: false
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },

        {
          name: 'statistics',
          meta: {
            title: '统计分析',
            prefix: 'js',
            suffix: 'angle-down',
            active: false,
            anchor: false
          },
          children: [
            {
              name: 'add-enable',
              meta: {
                title: '新增和启动',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            },
            {
              name: 'active-analysis',
              meta: {
                title: '活跃分析',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            },
            {
              name: 'segment-analysis',
              meta: {
                title: '时段分析',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            }
          ]
        }
      ],
      menu4: [
        {
          name: 'content-management',
          meta: {
            title: '内容管理',
            prefix: 'css3',
            suffix: 'angle-down',
            active: true,
            anchor: false
          },
          children: [
            {
              name: 'article-management',
              meta: {
                title: '文章管理',
                prefix: '',
                suffix: '',
                active: true,
                anchor: true
              }
            },
            {
              name: 'comments-management',
              meta: {
                title: '评论管理',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            },
            {
              name: 'report-management',
              meta: {
                title: '举报管理',
                prefix: '',
                suffix: '',
                active: false,
                anchor: false
              }
            }
          ]
        }
      ],
      items: [],
      fields: []
    };
  },

  created() {},

  async mounted() {
    const interval = setInterval(() => {
      this.progress1 += 1;
      this.progress2 += 1;
      if ((this.progress1 === 100) | (this.progress2 === 100))
        clearInterval(interval);
    }, 10);

    setInterval(() => {
      this.collapse2 = !this.collapse2;
    }, 6000);

    setTimeout(() => {
      this.menu3 = this.menu1;
      setTimeout(() => {
        this.menu3 = this.menu4;
      }, 2000);
    }, 2000);

    setTimeout(() => {
      this.input8 = 'tester';
      this.type = 'password';
      this.suffix = 'angle-down';
      this.valueTest = 80;
      this.disabledTest = true;
      this.loadingtest = false;
      this.mock.forEach(item => {
        this.treeData.push(item);
      });
    }, 4000);

    setTimeout(() => {
      this.items = [
        {
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
          job: 'web developer',
          cellColor: {
            // first_name: '#aed581',
            // age: '#ffab91'
          }
        },
        {
          age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw',
          job: 'IOS developer'
        },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          job: 'Android developer'
        },
        {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney',
          job: 'Frontend developer'
        },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          job: 'Android developer',
          rowColor: '#ffab91'
        },
        {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney',
          job: 'Frontend developer'
        },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          job: 'Android developer'
        },
        {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney',
          job: 'Frontend developer'
        }
      ];
      this.fields = [
        {
          key: 'last_name',
          label: 'test1',
          sortable: true,
          tdClass: 'last-name'
        },
        {
          key: 'first_name',
          label: 'test1',
          sortable: false
        },
        {
          key: 'job',
          label: 'test1'
        },
        {
          key: 'age',
          colColor: '#ffab91',
          label: 'test1',
          sortable: true,
          tdClass: 'age',
          thClass: 'age'
        },
        {
          key: 'button',
          label: 'button'
        }
      ];
    }, 2000);
  },

  methods: {
    onSubmit() {
      console.log('submit!');
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    resetFormItem(formName) {
      this.$refs[formName].resetField();
    },
    clear(formName) {
      this.$refs[formName].clearValidate();
    },
    validateOne(formName, name) {
      this.$refs[formName].validateField(name);
    },
    suffixIconClickHandler(val) {
      console.log(val);
    },
    clean() {
      this.list = [];
    },
    test1() {
      this.input5 = '';
    },
    current_change: function(currentPage, pre) {
      console.log(currentPage, pre);
    },
    checkedHandler(val) {
      console.log(val);
    },

    radioHandler(val) {
      console.log(val);
    },

    switchHandler(val) {
      console.log(val);
    },

    rangeSliderHandler(val) {
      console.log(val);
    },

    inputHandler(val) {
      console.log(val);
    },

    focusHander(val) {
      // console.log('focus');
      console.log(val);
    },

    changeHandler(val) {
      console.log(val);
      // console.log('change');
    },

    confirmHandler(val) {
      console.log(val);
    },

    cascaderHandler(val) {
      console.log(val);
      // this.input12 = val;
    },

    blurHandler(val) {
      // console.log('blur');
      console.log(val);
    },

    search7Handler(val) {
      this.sufLoading7 = true;
      console.log(val);
      setTimeout(() => {
        this.sufLoading7 = false;
      }, 2000);
    },

    search9Handler(val) {
      this.sufLoading9 = true;
      console.log(val);
      setTimeout(() => {
        this.sufLoading9 = false;
      }, 2000);
    },

    uploadHandler(val) {
      this.files = val;
    },

    buttonClickHandler() {
      this.collapse2 = !this.collapse2;
    },

    checkedHandlerCountries(val) {
      let checkedCount = val.length;
      this.checked4 = checkedCount === this.countriesList.length;
      this.isIndeterminate4 =
        checkedCount > 0 && checkedCount < this.countriesList.length;
    },
    checkedHandlerGroup(val) {
      console.log(val);
      if (val) {
        this.checkedCountry = this.countriesList.map(item => item.value);
        this.isIndeterminate4 = false;
      } else {
        this.checkedCountry = [];
        this.isIndeterminate4 = false;
      }
    },

    indexHandler(val) {
      console.log(val);
    },

    routerNameHandler(val) {
      // console.log('name:' + val);
    },

    routerIndexHandler(val) {
      // console.log('index:' + val);
    },

    showDetails(item) {
      item.row.toggleDetails();
    },

    test() {
      console.log('hi');
    },

    modalHandler() {
      this.open1 = !this.open1;
    },

    closeHandler() {
      if (this.open1) {
        this.open1 = false;
      }
    },

    fetchDataHandler(node) {
      console.log(node);
      this.addedId = node.id;
      this.addNode(node.id, this.treeData);
    },

    removeDataHandler(node) {
      console.log(node);
      this.removedId = node.id;
      this.removeNode(node.id, this.treeData);
    },

    removeNode(id, data) {
      if (!data || !data.length) return;
      data.forEach(item => {
        if (item.id === id) {
          item.children = [];
          item.showChildren = false;
          return;
        }
        if (item.children && item.children.length) {
          this.removeNode(id, item.children);
        }
      });
    },

    addNode(id, data) {
      if (!data || !data.length) return;
      data.forEach(item => {
        if (item.id === id) {
          for (let index = 0; index < 100; index++) {
            const node = {
              name: faker.address.state(),
              hasChildren: faker.random.boolean(),
              showChildren: false,
              id: faker.random.uuid(),
              type: faker.random.boolean() ? 'leave' : 'node',
              children: [],
              prefix: 'html5'
            };
            item.children.push(node);
            item.showChildren = true;
          }
          return;
        }
        if (item.children && item.children.length) {
          this.addNode(id, item.children);
        }
      });
    },

    execHandler() {
      console.log('loading');
      // this.addNode(this.addedId, this.treeData);
    }
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
#app {
  overflow: hidden;
  .btns {
    display: flex;
    button {
      margin: 8px;
    }
  }
  .form {
    width: 70%;
    margin: 0 auto;
    .button-wrap .c4it-form-item__content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .checkbox {
    display: flex;
    .c4it-checkbox {
      margin: 8px;
    }
  }

  .checkbox-group {
    .c4it-checkbox {
      margin: 8px;
    }
  }
  .radio {
    display: flex;
    .c4it-radio {
      margin: 8px;
    }
  }
  .radio-group {
    .c4it-radio {
      margin: 8px;
    }
  }

  // .input {
  //   .c4it-input-field {
  //     margin: 8px;
  //   }
  // }

  // .dropdown {
  //   display: flex;
  // }

  .datepicker {
    margin: 16px;
  }

  .timepicker {
  }

  .upload {
    .c4it-upload {
      margin: 8px;
    }
  }

  .accordion-group {
    display: flex;
    .accordion {
      width: 240px;
      margin-right: 16px;
    }
  }

  .cascader {
    display: flex;
  }

  .nav {
    display: flex;
    height: 500px;
    justify-content: space-around;
    .nav-item {
      // background-color: rgba(#374054, 1);
      .group-label {
        height: 60px;
        display: flex;
        align-items: center;
      }

      .c4it-tree {
        height: 500px;
      }
    }
  }

  table {
    tr {
      .age {
        position: sticky;
        right: 0;
      }
    }
    // .item {
    //   margin-top: 50px;
    //   display: flex;
    //   justify-content: center;
    //   .row-details {
    //     width: 100%;
    //     border: 1px solid #eeeeee;
    //     .last-name,
    //     .first-name {
    //       label {
    //         font-weight: 700;
    //       }
    //     }

    //     .info {
    //       padding: 24px;
    //     }
    //   }
    //   .fixed {
    //     .c4it-dropdown-field {
    //       width: 120px;
    //       .c4it-dropdown {
    //         border: none;
    //         background-color: #3f51b5;
    //         .selected {
    //           color: #ffffff;
    //           opacity: 1;
    //         }
    //       }
    //       .c4it-suffix {
    //         color: #ffffff;
    //         opacity: 1;
    //       }
    //     }
    //   }
    //   .c4it-dropdown-field {
    //     width: 120px;
    //     .c4it-dropdown {
    //       border: none;
    //       background-color: #3f51b5;
    //       .selected {
    //         color: #ffffff;
    //         opacity: 1;
    //       }
    //     }
    //     .c4it-suffix {
    //       color: #ffffff;
    //       opacity: 1;
    //     }
    //   }

    //   .c4it-input-field {
    //     box-sizing: border-box;
    //     width: 150px;
    //   }

    //   .c4it-datepicker-field {
    //     box-sizing: border-box;
    //     width: 150px;
    //   }
    // }
  }

  .scrollbar {
    .text {
      // white-space: nowrap;
    }
  }
}
</style>
