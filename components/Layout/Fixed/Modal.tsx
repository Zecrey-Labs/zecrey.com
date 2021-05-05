/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { MaskStyle, ModalStyle, SubmittedStyle, FormStyle } from './style'
import { Img } from '@/components'
import { CloseOutlined } from '@ant-design/icons'
import { Form, Input, Button } from 'antd'
import { validatePhone } from '@ys/utils'
import axios from 'axios'
import { CheckCircleFilled } from '@ant-design/icons'

interface Props {
  close: () => void
  submit: () => void
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export const Modal = ({ close, submit }: Props) => {
  const [submitted, setSubmitted] = React.useState(false)

  const onFinish = async values => {
    await axios.post('/api/message', values)
    setSubmitted(true)
    submit()
  }
  return (
    <MaskStyle>
      <ModalStyle>
        <Img src={require('@/public/images/giftForm.png')} />
        <CloseOutlined
          className={'close-icon'}
          onClick={() => {
            close()
            submitted && submit()
          }}
        />

        {submitted ? (
          <SubmittedStyle>
            <h1>
              <CheckCircleFilled className={'checked-icon'} />
              提交成功
            </h1>
            <p>您已成功提交申请,我们会尽快完成信息确认,进行礼包发放</p>
          </SubmittedStyle>
        ) : (
          <FormStyle>
            <Form
              {...layout}
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}>
              <Form.Item
                label='姓名'
                name='name'
                rules={[{ required: true, message: '姓名不能为空' }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label='电话'
                name='phone'
                rules={[
                  { required: true, message: '电话不能为空/电话号码格式错误' },
                  {
                    pattern: validatePhone.reg,
                    message: '手机号格式不正确',
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label='邮箱'
                name='email'
                rules={[{ type: 'email', message: '邮箱格式不正确' }]}>
                <Input />
              </Form.Item>

              <Form.Item label='工作单位' name='company'>
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout} className={'submit'}>
                <Button type='primary' htmlType='submit'>
                  提交
                </Button>
              </Form.Item>
            </Form>
          </FormStyle>
        )}
      </ModalStyle>
    </MaskStyle>
  )
}
