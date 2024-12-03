export const Inputs = [
    {   id : 1,
        number: 1,
        tagname: "Text Field",
        data: {
            type: "text",
            label: "",
            placeholder: "",
            name: "",
            isRequired: false,
        },

        render: function () {
            return `
    <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">${this.data.label}</label>
  <input type="${this.data.type}" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name= "${this.data.name}" placeholder = "${this.data.placeholder}" required = ${this.data.isRequired} /> </div>`;
        },
    },
    {
        id : 2,
        number: 2,
        tagname: "Text Area",
        data: {
            type: "text-area",
            label: "",
            placeholder: "",
            name: "",
            isRequired: false,
            row: 4,
        },

        render: function () {
            return `<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">${this.data.label}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={${this.data.row}} defaultValue={""} placeholder="${this.data.placeholder}" name="${this.data.name}"  required = ${this.data.isRequired}/>
</div>`;
        },
    },
    {   id :3,
        number: 3,
        tagname: "Number",
        data: {
            type: "Number",
            label: "",
            placeholder: "",
            name: "",
            isRequired: false,
        },

        render: function () {
            return `
    <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">${this.data.label}</label>
  <input type="${this.data.type}" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name= "${this.data.name}" placeholder = "${this.data.placeholder}" required = ${this.data.isRequired} /> </div>`;
        },
    },
    {
        id :4,
        number : 4,
        tagname : "Radio Button",
        data  : {
            type:'radio',
            label :"",
            name :"",
            options : [
             
               
            ]
        }
    },
    {
        id :5,
        number : 5,
        tagname : "CheckBox",
        data  : {
            type:'checkbox',
            label :"",
            name :"",
            options : [
             
               
            ]
        }
    },
    {   id : 6,
        number: 6,
        tagname: "Password",
        data: {
            type: "password",
            label: "",
            placeholder: "",
            name: "",
            isRequired: false,
        },

        render: function () {
            return `
    <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">${this.data.label}</label>
  <input type="${this.data.type}" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name= "${this.data.name}" placeholder = "${this.data.placeholder}" required = ${this.data.isRequired} /> </div>`;
        },
    },
    {   id : 7,
        number: 7,
        tagname: "Email",
        data: {
            type: "email",
            label: "",
            placeholder: "",
            name: "",
            isRequired: false,
        },

        render: function () {
            return `
    <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">${this.data.label}</label>
  <input type="${this.data.type}" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name= "${this.data.name}" placeholder = "${this.data.placeholder}" required = ${this.data.isRequired} /> </div>`;
        },
    },
    {   id : 8,
        number: 8,
        tagname: "Heading",
        data: {
            type: "text",
            label: "",
            placeholder: "",
            name: "",
            isRequired: false,
        },

        render: function () {
            return `
    <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">${this.data.label}</label>
  <input type="${this.data.type}" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name= "${this.data.name}" placeholder = "${this.data.placeholder}" required = ${this.data.isRequired} /> </div>`;
        },
    },
];
