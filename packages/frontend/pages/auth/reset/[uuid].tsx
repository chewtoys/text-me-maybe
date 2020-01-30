import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { Button, Form, Input, Typography } from 'antd';
import { useResetPasswordMutation } from '../../../queries';
import { withNoAuth } from '../../../components/utils/auth';
import Container from '../../../components/Auth/Container';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};

function ResetPassword() {
    const { query } = useRouter();
    const [resetPassword, { data, loading }] = useResetPasswordMutation();

    useEffect(() => {
        resetPassword();
    }, [resetPassword]);

    useEffect(() => {
        if (data && data.resetPassword.complete) {
            // TODO: It's really annoying manually setting this hasUser context.
            // We probably should instead just have a standard way for GraphQL
            // to update this value directly, and trigger a re-render through children.
            Router.push('/inbox');
        }
    }, [data]);

    const onFinish = (values: Record<string, string>) => {
        resetPassword({
            variables: {
                uuid: query.uuid as string,
                password: values.password
            }
        });
    };

    return (
        <Container title="Password Reset">
            <Typography.Paragraph>
                You can set a new password for your account below, which can be used for all future
                sign-ins.
            </Typography.Paragraph>

            <Form {...layout} name="login" onFinish={onFinish}>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password autoFocus />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" disabled={loading}>
                        Reset Password
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
}

export default withNoAuth(ResetPassword);
