'use client';

import { updateUserInfo } from '@/apis/users';
import Input from '@/components/Input';
import { Button } from '@/components/button/Button';
import React, { useState } from 'react';
import * as styles from './page.css';

export default function ProfileEdit() {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImageUrl: '',
  });

  const [errors, setErrors] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'email':
        return !value.includes('@') || !value.includes('.') ? '이메일 형식으로 작성해 주세요.' : '';
      case 'nickname':
        return value.length > 10 ? '닉네임은 10자 이하로 작성해주세요.' : '';
      case 'password':
        return value.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '';
      case 'confirmPassword':
        return value !== formData.password ? '비밀번호가 일치하지 않습니다.' : '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: validateField('email', formData.email),
      nickname: validateField('nickname', formData.nickname),
      password: validateField('password', formData.password),
      confirmPassword: validateField('confirmPassword', formData.confirmPassword),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      try {
        setLoading(true);

        const requestData = {
          nickname: formData.nickname || undefined,
          profileImageUrl: formData.profileImageUrl || undefined,
          newPassword: formData.password || undefined,
        };
        console.log('Sending data to API:', requestData);

        await updateUserInfo(requestData);

        alert('사용자 정보가 성공적으로 수정되었습니다.');
      } catch (error) {
        console.error(error);
        alert('사용자 정보 수정 중 문제가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as React.FormEvent);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>내 정보</h1>
        <Button
          label='수정하기'
          disabled={loading || !formData.nickname || !formData.email || !formData.password || !formData.confirmPassword}
          className={styles.saveButton}
          onClick={handleButtonClick as () => void}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label className={styles.label}>닉네임</label>
          <Input
            type='text'
            name='nickname'
            value={formData.nickname}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='닉네임을 입력해 주세요'
            error={Boolean(errors.nickname)}
            errorMessage={errors.nickname}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>이메일</label>
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='이메일을 입력해 주세요'
            error={Boolean(errors.email)}
            errorMessage={errors.email}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>비밀번호</label>
          <Input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='비밀번호를 입력해 주세요'
            error={Boolean(errors.password)}
            errorMessage={errors.password}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>비밀번호 재입력</label>
          <Input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='비밀번호를 다시 입력해 주세요'
            error={Boolean(errors.confirmPassword)}
            errorMessage={errors.confirmPassword}
          />
        </div>
      </form>
    </div>
  );
}
