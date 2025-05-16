import React, { useState } from 'react';
import './App.css';

// const InputField = ({ label, value, onChange, type = 'text', placeholder = '' }) => (
//   <div className="form-group">
//     <label className="field-label">{label}</label>
//     <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="form-input" />
//   </div>
// );

const InputField = ({ label, value, onChange, type = 'text', placeholder = '', showInfoIcon = false }) => (
  <div className="form-group">
    <label className="field-label">
      {label} {showInfoIcon && <i class="fa-solid fa-info"></i> /*  <span className="info-icon">ℹ️</span> */}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-input"
    />
  </div>
);

const TextAreaField = ({ label, value, onChange, placeholder = '' }) => (
  <div className="form-group">
    <label className="field-label">{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} className="form-textarea" />
  </div>
);

// const RadioGroup = ({ label, name, options, selectedValue, onChange }) => (
//   <div className="form-group">
//     <label className="field-label">{label}</label>
//     <div className="radio-group">
//       {options.map((option) => (
//         <label key={option.value} className="custom-radio">
//           <input
//             type="radio"
//             name={name}
//             value={option.value}
//             checked={selectedValue === option.value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//           <span className="radio-button"></span>
//           <span>{option.label}</span>
//         </label>
//       ))}
//     </div>
//   </div>
// );

const RadioGroup = ({ label, name, options, selectedValue, onChange }) => (
  <div className="form-group">
    <label className="field-label">{label}</label>
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className={`radio-option ${selectedValue === option.value ? 'selected' : ''}`}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

const SelectField = ({ label, value, onChange, options, helperText }) => (
  <div className="form-group">
    <label className="field-label">{label}</label>
    <select value={value} onChange={onChange} className="form-select">
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {helperText && <p className="helper-text">{helperText}</p>}
  </div>
);

const PhoneNumberField = ({ code, setCode, number, setNumber }) => (
  <div className="form-group">
    <label className="field-label">Phone number</label>
    <div className="phone-input-wrapper">
      <select value={code} onChange={(e) => setCode(e.target.value)} className="country-code-select">
        <option value="+1">+1</option>
        <option value="+91">+91</option>
        <option value="+44">+44</option>
        {/* Add more codes as needed */}
      </select>
      <input
        type="tel"
        className="phone-input"
        placeholder="1234567890"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
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
  const [phoneCode, setPhoneCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

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
          {/* <InputField
            label="Select the category"
            type="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          /> */}
          <SelectField
            label="Select the category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={['Item issue', 'Seller issue', 'Payment issue']}
            helperText="Choose the category that aligns with your report."
          />
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

        <CardSection title="Issue information">
          <TextAreaField
            label="Description of issue (Required)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue here..."
          />
          <InputField
            label="Product link"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            type="url"
            showInfoIcon={true}
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
              showInfoIcon={true}
            />
          </div>

          <hr class="divider" />

          <h3 className="card-title">Seller Information</h3>

          <TextAreaField
            label="Seller information page link"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue here..."
            showInfoIcon={true}
          />
          <InputField
            label="Seller name"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            showInfoIcon={true}
          />

          <hr class="divider" />

          <h3 className="card-title">Your Information</h3>

          <div className="row">
            <InputField
              label="Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {/* <InputField
              label="Phone number"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            /> */}

            <PhoneNumberField
              code={phoneCode}
              setCode={setPhoneCode}
              number={phoneNumber}
              setNumber={setPhoneNumber}
            />
          </div>



          <div className="row">
            <InputField
              label="Email"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {/* <InputField
              label="Who are you?"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            /> */}
            <SelectField
              label="Who are you?"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={['Customer', 'Seller', 'Other']}
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
