import React, { useState } from 'react';
import './App.css';

const InputField = ({ label, value, onChange, type = 'text', placeholder = '' }) => (
  <div className="form-group">
    <label className="field-label">{label}</label>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="form-input" />
  </div>
);

const TextAreaField = ({ label, value, onChange, placeholder = '' }) => (
  <div className="form-group">
    <label className="field-label">{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} className="form-textarea" />
  </div>
);

const RadioGroup = ({ label, name, options, selectedValue, onChange }) => (
  <div className="form-group">
    <label className="field-label">{label}</label>
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="custom-radio">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="radio-button"></span>
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const CardSection = ({ title, children }) => (
  <div className="card-section">
    {title && <h3 className="card-title">{title}</h3>}
    {children}
  </div>
);

export default function ReportSellerActivityForm() {
  const [category, setCategory] = useState('Item issue');
  const [issueType, setIssueType] = useState('stolen');
  const [description, setDescription] = useState('');
  const [productLink, setProductLink] = useState('');
  const [productName, setProductName] = useState('');
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, issueType, description, productLink, productName, orderId });
  };

  return (
    <div className="report-form-container">
      <h1 className="form-header">Report seller activity</h1>
      <p className="form-subtext">
        Use this form to report suspicious Marketplace activity. You can also call us at
        1-800-WALMART (1-800-925-6278).
      </p>
      <form onSubmit={handleSubmit}>
        <CardSection>
          <InputField
            label="Select the category"
            type="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </CardSection>

        <CardSection>
          <RadioGroup
            label="What issue would you like to report?"
            name="issueType"
            selectedValue={issueType}
            onChange={setIssueType}
            options={[
              {
                value: 'wrongItem',
                label:
                  'The item I received was not the item I ordered and the seller refused the return.',
              },
              {
                value: 'stolen',
                label: 'This item may have been stolen.',
              },
            ]}
          />
        </CardSection>

        <CardSection title="Description">
          <TextAreaField
            label="Description of issue (Required)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue here..."
          />
        </CardSection>

        <CardSection title="Product Details">
          <InputField
            label="Product link"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            type="url"
          />
          <div className="row">
            <InputField
              label="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <InputField
              label="Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>
        </CardSection>

        <CardSection title="Seller Information">
          <TextAreaField
            label="Seller information page link"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue here..."
          />
          <InputField
            label="Seller name"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </CardSection>

        <CardSection title="Product Details">

          <div className="row">
            <InputField
              label="Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <InputField
              label="Phone number"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>

          <div className="row">
            <InputField
              label="Email"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <InputField
              label="Who are you?"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>
        </CardSection>

        <div className="form-footer">
          <button type="submit" className="submit-button">Submit Report</button>
        </div>
      </form>
    </div>
  );
}
