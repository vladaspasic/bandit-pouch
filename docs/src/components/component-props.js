import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const PropType = ({ prop }) => {
  const { type = {}, parentType = {} } = prop;
  let name;
  if (parentType && parentType.name) {
    ({ name } = parentType);
  } else {
    ({ name } = type);
  }

  const { value = [] } = type;

  return (
    <div style={{ display: 'flex' }}>
      <span>{name}</span>
      {Array.isArray(value) && (
        <ul className="nav" style={{ color: 'rgb(236, 171, 32)', marginLeft: '5px' }}>
          {value.map(t => (<li key={t.name}>{t.name}</li>))}
        </ul>
      )}
    </div>
  );
};

PropType.propTypes = {
  prop: PropTypes.object.isRequired,
};

const PropDescription = ({ prop }) => {
  const { docblock, description = {} } = prop;
  if (description && description.text) {
    return (<span>{description.text}</span>);
  }
  return (<span>{docblock}</span>);
};

PropDescription.propTypes = {
  prop: PropTypes.object.isRequired,
};

/**
 * Table for React props generated by react-docgen
 *
 * @see https://github.com/episodeyang/react-component-props-table/
 */
const ComponentProps = ({ propMetaData = [], ..._props }) => (
  <Table responsive hover {..._props}>
    <thead>
      <tr>
        <th width="15%">Prop Name</th>
        <th width="20%">Type</th>
        <th width="10%">Is Required</th>
        <th width="15%">Default Value</th>
        <th width="40%">Description</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(propMetaData).map((key) => {
        const prop = propMetaData[key];
        return (
          <tr key={key}>
            <td style={{ color: 'rgb(17, 147, 154)' }}>{prop.name}</td>
            <td>
              <PropType prop={prop} />
            </td>
            {prop.required ? (
              <td style={{ color: 'rgb(255, 76, 34)' }}>required</td>
            ) : (
              <td style={{ color: '#c6c6c6' }}>optional</td>
            )}
            {prop.defaultValue ? (
              <td style={{ color: 'rgb(236, 171, 32)' }}>
                {prop.defaultValue.value}
              </td>
            ) : (
              <td style={{ color: '#c6c6c6' }}>none</td>
            )}
            <td>
              <PropDescription prop={prop} />
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

ComponentProps.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.array.isRequired,
};

export default ComponentProps;
