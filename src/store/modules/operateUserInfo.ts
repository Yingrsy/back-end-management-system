interface operateUserInfoState {
    dialogFormVisible: boolean,
    formTitle: string,
    formData: any
}

const operateUserInfo = {
    namespaced:true,
    state(){
        return {
            dialogFormVisible: false,
            formTitle: '',
            formData: null
        }
    },
    mutations: {
        showDialogForm(state: operateUserInfoState, title: string){
            state.dialogFormVisible = true
            state.formTitle = title
        },
        hideDialogForm(state: operateUserInfoState){
            state.dialogFormVisible = false
        },
        setFormData(state: operateUserInfoState, formData: any) {
            state.formData = formData
        }
    }
}

export default operateUserInfo 
