﻿import { Input, Switch, Icon, Select, Upload, message, Modal } from 'antd';
import UploadImg from 'components/form/uploadImg';
import Transfer from 'components/form/transfer';
import Selects from 'components/form/select';
import { FormItem } from 'components/dataView';
import * as React from 'react';
import lodash from 'lodash';
import Regular from 'utils/Regular';
import Store from '../store';

/**
 * label  标识
 * rules   校验规则，参考下方文档  https://ant.design/components/form-cn/#components-form-demo-validate-other
 * formItem  表单组件
 */
export default {
    /**
     * 表单模型 
     * @param props 
     */
    editModels(props?) {
        return {
            Teset:{
                label: "Teset",
                rules: [{ "required": true, "message": "Teset不能为空" }],
            }

        }
    },
    /**
     * 搜索 模型 
     * @param props 
     */
    searchModels(props?) {
        return {
            Teset:{
                label: "Teset",
                rules: [],
                formItem: <Input placeholder="" />
            }

        }
    },
    /**
     * 渲染 模型
     */
    renderModels(props?) {
        return lodash.map(props.models, (value, key) => {
            return <FormItem {...props} fieId={key} key={key} />
        })
    }
}