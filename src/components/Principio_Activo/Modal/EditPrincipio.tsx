import React from 'react';
import { Form, Input, Select, Checkbox, Row, Col } from 'antd';

const EditPrincipio: React.FC = () => {
  const [form] = Form.useForm();

  const onCheckboxChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
  };

  const grupoTerapeuticoOptions = Array.from({ length: 26 }, (_, i) => ({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  }));

  const categoriaOptions = [
    { value: '1', label: 'Not Identified' },
    { value: '2', label: 'Closed' },
    { value: '3', label: 'Communicated' },
    { value: '4', label: 'Identified' },
    { value: '5', label: 'Resolved' },
    { value: '6', label: 'Cancelled' },
  ];

  return (
    <Form
      form={form}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
      {/* Campo Nombre */}
      <Form.Item
        label="Nombre"
        name="Nombre"
        rules={[{ required: true, message: 'Campo requerido!' }]}
      >
        <Input />
      </Form.Item>

      {/* Campo Observación */}
      <Form.Item
        label="Observación"
        name="Observación"
        rules={[{ required: true, message: 'Campo requerido!' }]}
      >
        <Input />
      </Form.Item>

      {/* Campo Mar (Checkboxes) */}
      <Form.Item
        label="Mar"
        name="Mar"
        rules={[{ required: true, message: 'Por favor seleccione una opción!' }]}
      >
        <Checkbox.Group onChange={onCheckboxChange}>
          <Row>
            <Col>
              <Checkbox value="Sí">Sí</Checkbox>
            </Col>
            <Col>
              <Checkbox value="No">No</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        label="Estado"
        name="Estado"
        rules={[{ required: true, message: 'Por favor seleccione una opción!' }]}
      >
        <Checkbox.Group onChange={onCheckboxChange}>
          <Row>
            <Col>
              <Checkbox value="Disponible">Disponible</Checkbox>
            </Col>
            <Col>
              <Checkbox value="No Disponible">No Disponible</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      {/* Campo Grupo Terapéutico (Select con múltiples opciones) */}
      <Form.Item
        label="Grupo Terapéutico"
        name="Grupo Terapéutico"
        rules={[{ required: true, message: 'Campo requerido!' }]}
      >
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Seleccione varios grupos terapéuticos"
          options={grupoTerapeuticoOptions}
        />
      </Form.Item>

      {/* Campo Categoría (Select con una sola opción) */}
      <Form.Item
        label="Categoría"
        name="Categoría"
        rules={[{ required: true, message: 'Campo requerido!' }]}
      >
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Seleccione una categoría"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={categoriaOptions}
        />
      </Form.Item>

    </Form>
  );
};

export default EditPrincipio;
