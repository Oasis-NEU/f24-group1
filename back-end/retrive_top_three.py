# add full stop at the end to show that this is working

class RetrieveTopThree:

    def prove_work(self, content):
        return str(content + ".")

    def prove_work_return_json(self, content):
        return_dict = {"content_1" : content, 
                    "content_2" : content,
                    "content_3" : content}
        return return_dict


    