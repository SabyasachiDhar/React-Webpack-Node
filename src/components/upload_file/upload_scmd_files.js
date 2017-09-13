import React, { Component } from 'react'
import axios, { post } from 'axios';

class UploadFilesSCMD extends Component {

  constructor(props) {
    super(props);
    this.state ={
      files:[]
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.files).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({files: Array.from(e.target.files)})
  }

  fileUpload(files){
    console.log(files);
    const url = 'https://9.109.123.220:8443/upload_infrastructure';
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]);
    }
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData, config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>File Upload SCMD</h2>
        <input type="file" onChange={this.onChange} multiple />
        <button type="submit">Upload</button>
      </form>
   )
  }
}

export default UploadFilesSCMD