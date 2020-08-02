import React from 'react';
import t from 'prop-types';
import uuid from 'uuid/dist/v4';
import { Input, FormFieldWrapper, Label } from './styled';

export default function FormField({
  name,
  type,
  value,
  onChange,
  children,
  suggestions,
}) {
  const fieldId = `id_${name}`;

  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          name={name}
          onChange={onChange}
          value={value}
          type={type}
          hasValue={hasValue}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text>{children}</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option key={uuid()} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  value: t.string,
  onChange: t.func,
  name: t.string.isRequired,
  type: t.string,
  children: t.node.isRequired,
  suggestions: t.arrayOf(t.string),
};
