import csv
import requests
import json




class SwearRecogniser:
    def __init__(self):
        with open('swear_words.csv', 'r') as f:
            reader = csv.reader(f)
            swear_list = list(reader)[0]

        self.swear_list = swear_list

    def search_for_swears(self, recognised_speech: str) -> None:
        """
        Search a string for occurnece of naugty words. 
        """
        recognised_swears = list()

        for swear in self.swear_list:
            if ' ' + swear + ' ' in ' ' + recognised_speech + ' ':
                recognised_swears.append(swear) 

        if len(recognised_swears) != 0:
            self.swear_recognised(recognised_swears)
            return True
        else :
           return False

    @staticmethod
    def swear_recognised(recognised_swears: list):
        print("Swear recognised:" + ' '.join(recognised_swears))

        receiverAccountNumber = "99-6652-7925438-50"

        request_data = {
            'receiverAccount' : receiverAccountNumber
        }

        request_data_json = json.dumps(request_data)

        print(request_data_json)


        url = "http://localhost:5000/deductSwearCost"


        x = requests.post(url, json = request_data)

        print(x.status_code)

        # Surface to frint end
        # Api CALL


def local_test():
    sr = SwearRecogniser()

    print(sr.swear_list)
    sr.search_for_swears("Hey your a nice guy")
    sr.search_for_swears("But shit you ferry boy")


# local_test()
