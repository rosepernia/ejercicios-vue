<template>
  <div>
   <h1>Editor de texto</h1>
   <Editor
       api-key="no-api-key"
       :init="{
         height: 250,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
       v-model="texto"
     />
  </div>
  <div>
      <h3 v-html="texto"></h3>
  </div>
</template>

<script>
import {ref} from 'vue'
import Editor from '@tinymce/tinymce-vue'
export default {
  name: "TinyMCE",
  components: {
     'Editor': Editor
   },
  props: {
  },
  setup(){
   let texto=ref('')

    return {
      texto,
    }
  }  
}  
</script>

<style scoped lang="scss" >
h2 {
  color: rgb(175, 113, 199);
}
div {
  display: inline-block;
  vertical-align: top;
}
button{

  background: rgb(175, 113, 199);
  border-radius: 6px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  color:white;
}
</style>
