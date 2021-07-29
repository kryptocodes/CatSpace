import React from 'react'

interface StoriesProps {

}

const CatImage = [
    {
        name: "meow",
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgXFhUZGRgaHR0aHBwcGhoaHBwhGhoaGh4cGBwhIS4lHiMrHxocJjgmKy8xNTU1HiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrIys0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EAEIQAAECBAQEBAMGBAYBAwUAAAECEQADITEEEkFRBWFxgSIykaGxwfATQlJy0eEGFGKSFTOCorLxwiNT0lRjc5Oz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAgIDAAMBAAMBAAAAAAAAAAECERIhMQNBUXETMmEi/9oADAMBAAIRAxEAPwAWPCY8zR4oxymjZFCPEojhS49QuKSJLAiPFojz7SIuZDCgdaIGWiCVqjhKXhiZSlLcxt8xsYJlJaot8OscqRHUsMYBDrDLcPqGB6WB+A9N4aYeaIQYZeU5hUWI60IPI7weF5SzuDUHcH56HmDCQhxngecoQOqfY7/Kn794rXMhsZTirdfr9YUzUsYZ4g1banpSAJiYTQHCVx1ngZZaOTMgoYSubFC58VLXFCzDEWqnRx9rFLPFsjCrWWQkk8oAO5RcsPrrBaZ+gsLc+ZgXESVSvAoMo35DQfM9o9RJWA5GXqQIQ0xlLnRaZ8K3I2PQvHqZhPTfSAdhy50UKmQOtZoBVv1J+ceoeHRJbmMexxliQUBBMjxU2OhKeLBhokpsFK4maCjhYomSmgQrK/tYmcmKlIi3DoeGFhEqVFyZEFYeTSC0SIBCsyY4MqG68PAy5LQCBUKy/XtBEteYZRe6N31R1ItuW3MUKTHCSx1bVrjYjmLw0ATLxAKTuK/I/EekdCY5HWPJiKhbUNFgbkOSnktDkc81mEVhOVeV7EV3rcQmFnq1kxQuCEIpHplQmMXrQYGUiG6pMDzJUFgL8schEGfZQ24LwYzC5FNYHJIpRbAOFcFVONmTqY2uBwMuQGSHOv7mCUpTLSyQABTqfqsTD3uWHiNLk6fXOErkwlpaEP8AFKCllgIztRwDlG9bmMWudmJKr7iN5/E88hBJSlQ31jBTFgFwllmydn1I32EayM4nWXLU+lv7tul4hmE37AfIaRBhlCqiEvqo/AXPWIEI1Wo9E/qYktnaViLkERSlKN1+iYtyp0Ue4/SGIvzCJA/+oehiQh0MESyIJlpjVL4MgijesDngpc7H9axipfSsTOzEQFPRGoncEUFeEvy9oFn8DWQaVpbaLU0GBl8lW3+qaGCsPh6j6/6PKHcvgRKXPmBqNxyf17w2lcIQBfZ+2sQ/IgwYow0g2I+uUHy8Gf3hjJwgSz1H1aCQAA70+HWF/KNeMWowROnX9RFa+D5vKrqDDtExPl19iD8Yiwnr7O9u/OBzY8F7EK+ADcBQ0NQY9RwFJYvlP1Qw9TLS1iRfp+8cLkAvXuL/AFr6ws2PGIrk8HSxSfKQxHK9DyNR3FoHxP8ADpLEGqfCe3l9qdudG6ZRTUFyBTqC7+9v1iz+bKWJF/CdqDwv8OxgjN+xOC9CCbwJaSWqCT2jk8KW1qjTcaN2jSy52YHcA01p/wBGO8wuRdj2NPrtDzFijIzeFLZ2gNfD1gsRe0bwlmb6b/qOSELBSWBh5WGJksBwnOwbmeUPglKE5ENzMGrlBKfDR7wGZYNdYhd/0pvWuEVJBygklhmNN6/Bo5mjIglzV1H4D5wQoHMquoSPVvlFWMmmreIWbkKU+tY3ijCTMTxPGrUpkKzZnyg2DXUo6JHuYSLnBBIQXXXMs3c3CBprW8H/AMRT8iyhFFK87aNZI5CvdztC2ThQkArJD2SPMf8A4jmewMWJFaQSdye5MFJwSrkBP5iE+xrHonKsgBA/pueqrmOMkSUXpkD8aP8Acf8Axj37IfjQe5HxECKpHBVANBv2P9SP7xEgHNEgKN0nHEsQbkE+/wCh9IIRjyT5vftX1jP4WaU0LHnVvhSGEtDgsOYIOYAu/iaojitnTihmjGrBY1G96Em/ZoiMbmJbzAkN8PhFWHlqVoe1R7exo/OPV4UhTspjtVjs4AI3rSvaE02TaLVYhRFO4/WO0zCdCGv+o/SOJM4keKrWJ8Km2e3uQeUEoIUxDjoLaVEQyrOZizT2INDs8WIWpQcJL6uPn03jpcvVJZrgVH0b7xX9sBtVrWL+6TzZvk1fsX4WIQcp2uNG6fW9Y7mTCCkEXqb03amh05xUjEF2KT+vpr+nr3MnpYgluem7vbXXeGmIk7FZdwRWh+Vj2imXjvxUOlWB3AOl/q0cTACwNwPu1fo36RUrC5tQOZo7auL7OQ8FyKSj7DJeMdV66g3djoa/R1gnEKzIIbnvTXvCuXhFg0UCNKP63IsNNRBaJrjYhiKEM7+bSu9I0jb6ZyS9FA4jlIzU33cg1/2qp0hkieFpOwTbZ2p7GEHFQ4UQC5ajWp5q8w3+qKeA8SzEg712D0PweFk06Y8U42jSYoqQKWufn8z2gJc5wVB6N+8WrxdnuW979hAZngrpY0A3bNU8q+0TPumEQ3CcRSpJSosS47aGLpE1IUEG7hujs/cB4Q40ZJgULKY7ORXXv2ghKnObVIU1dMyWf2iYyaZcoqjQqS1WFyr0/eEuOlZQVocKAtuo29KnrDfCzsyb6ERTPlBbAs6a9SbR2Rkcsony3FAoOdYdai6ARQD8ah8B32caSlSjqpR6kn9Y1PHuGnOpa6FXS272TsPgYTFLBkpYf2ju7KV3pyjRSRNHiJO5AO3mPol27tFplJb757AetS0Dud+1h6COSuGMsnS0c/UH/wAYDUhOij3H6PHS1wMtcIaRZ9nzT6iJA+cxIB0PES1AuADvS4PIMYaYBbnyU/1j5Ae8CSJgB8THcJA7ZjmJEO5eKSgDKkDofhUOI4pOjpC04kIDgFtXf1c09zFCuILJcVF6EP8AF25wFMnFVyCOWZKhzp+8UmUoF6lO4LtzcNW2xiHJsFFIdoxoUlwRyzfAn0r8Y9S4qkno41pQsX9K8oDw2HUoPlerhQJzPV8wDPpvzFHJmFwxJ8JLVcGqeoDOOYLQlY3SLETVUUasWexHI6/WsdzZgUfEltC9t2P66E20iw4dfIt0UKbAl/hHqFEJYpPMUJt22tF0RaKXoxqND9fOOzhwrUA1of8AusVTiztSlrfH6MUGewZz6/IEQrV7HT9DKVhWDFSSNso9ga6+8eTigU8RPJ2/ttpvCPGcSCU2JG1n79+8ZXjH8RrJyS6nVrDrG0d8ROL62bLEY1KMxzEDXMKkbeag5wGf4nli6nL0Dhx3+u8fOJ0qeuqlfXeA5kpafMlxzHwMWvG+2Fx4z6niMaiYnwbeXsR4fW2hbSE/DiUTVm5KQRoC6an1c+kY7h3FVyzclP3knQHY6iNlhsSJgCk1LMfh61jKcXF7LjzQ3XijUAk3Y8y3zI7Zo5kTK0NGSHvSoIfr89opUhwWNuujE9tGjwIAS1i+Y7m5PZ3vGTY0h1OT9oltWOXuzdLC+8UYdOXK5ez9Mpd+5HdouwCyQSX1p+Y0bow9YKyAltSQPcF69PjDUbVkuVaBF40oWhL3g840BaRcqS59Wr6wjx0tlpfSrbWLesSXPCVZlKAa5PKjfPvGivhDo0WPwYmM4dqgD4nX4Rl+J8JyGuUbCqiPQw2w38TSSQkLcvRiIcKn/aJpR7HX4iNe8ZDTXUfM8QgJ36lJHpWBczxs+J8KJf8A9Q9Ch/Q/pGcxGAUk+YH1+BjVMztC9UqKzJg1KIvTJgYCz7CPIa/YxIQ7PJKAVBklLd/W0OpWFUWzAZaat7PHvD8MWBV8veDk4q4zO2jseojz28mdvCuXgAjTqDbuGIHaDZaUjcepPS/7QOjEvs+9Cewf4RUQpw1eRYez9oSexV9DhMSmzdLfL4RYieNq9AD2BHwgGYujEB+5PxbT2gHGY4ISWWrkCba6v70h3QlGx+cajUsR/UPUgn5QDieJpYkker+tKesYbEcVUTQ+hSW7adRFaMUo3+If9+7xdyoteJD+dxNSiQhmsz79WeIhOIXVJB5F3vyOsVYJMosWUFbg06EpoO4hglYp4hozsK3fMCYzemVa9FU/ArMpZPnCTlS1vC17G94s4L/DUhEtBUXUtIUTqMwc0AJeCEcSUjVxzYk8xbn9GC8Fj5anAIQToaA9z5S+m+kdHj8lKkc3ljJ7BuIyMNLQWBzMWUXod2ytSEXC5yVIC6L+0HiQaoSokuCTVvDbmOUanHYP7UZVU05eveFnDf4eEkkC2Y32JJ+ftGn8jWl056+mO4/wHIn7RAbUpAZq1SBs3sYt/hlBSsIrlVVPQ1aNl/EKEow6yoCzDqA3yEY7gE2gBc5GqBbkN9ohtuLTN/C7RvcPg6A6Py6wFisOEmzAsBSugyj3+hF0riIQ2bVgCaXIoR9X5QVNWlTsagEitTT02jKSRorTKcMCwOWjk/2qF9TtbXnQ9YJA3qe9L866bRzKQAGDWA9PgHDd4LTKSaFTe2n1T6GkPhEvou4hIA/9QigQVF7+G79G9o+YY+ZPxSzlzBAPhTye/OPsX2LpUhQCkGjvYFwXtcRg+N4UYeelxlFAgBwkhiTXqBS9Y2gknbMnJrggw3B5shSFrSFJUWBa3IjWPpfC1jJRhS4b4QmC1LkzErJKSAUpDMlaS4IBt8w8XcLnzUICijMmlg7buIJOOVx4EZOUal074strqURoKp9xSM1MmgmiW7kn3Ma3G5JyNX6Ee0ZPE4cpLAH0i4yslxpkQIJQIAQtoMlzRDYUXZYkcfbCJCoKG6khi4SRZqg9qnn7RJaz5QCnld7WBavYxSvEg1zpBHNj6n9I4+3J8KFZuhO1rD60jzTvSLlljcP+FQAPJiD8jBK53g8Wm6UtvSlfa8CBRRRjm2y37230hLxTiamIUCO4HwrBG/QVYbieMIQ7W0am1y/waFGIxS5tlEh7Av6t+sCypil2+0PZ/f8ASHWGlzAfKW3UlRV28QY9ouqHqIDL4cpQDqI6hRA+I7fpDDDcMSkvVRFQUgpPam20Hov4QXuSpK9OeWvrHP8AOZfMU9QUv1YkD2gv6S5NgU/Kk+FAc3Kg57lNRHK181A1qDfSxLkX3rDNYlLAOYq1FQB1ozdRAijezWH4dR0gYkweXOmAMwbVyB8/hHapyCQFJIpoCaaUd9tTA2IxVWFKMDnDegGo3IbnFktasvjJIdquq+xFH5fQEimxng8YpFErISLEuoDkpKnINdD+7RHE1JIF/wArXGlbekZ1OKCSQgFwNXFqUKiw5sBE/wARAVlqVH7pYO34SL05RSbM3BS6H8awasWwM4JSKtkI2v4i8dSeCokIOUFat1Fn6NasD/zZNwUuPCSl3AqzhnruBBMklQdKqf0nMDp4gC40NtbGKybBJR4JeMTQoADwlLkF9Hd3N9IL4RjTrctatNPrpFXFsPm8pa4e7NVtN+te0ecKwpFQq5pQ6jlu3s1YiW/01TVDpPERuCxqdnAud7+pghHETbM5+tvnCaZhw4ILWpmBrSlLirPWBkrL3o5eh519fjEJuxYpm0weKzNUg9h3+No7xmAROTkmDMAQoEEOkgguk6c9D3jO4CbQaOTS1qdYcqWGD2pUFiGrX61jr8co1/0znnB3o6Rw0ISzuBr+vSB+CLP2ikgeEhx0+vjDBGJStOQhxS5Ls+huYJViEy6IQ76incxo1FbTMYxabTLZ8mWkWAPp8oxf8QoAJyod/wCo/D9o0GOxDkPm9QB3hTxYkocAEN1hXsrHRiphIN/kI9ROivGZiqo9IqSqLsSDft+cSBM0SEM1C0KJASO+vOhb4RaiTkuatZwDWrBv2EArxJQKqKRvr2b5Qvm8RUxyg9VMn2FAOrx56jZ2DPF4vKmgCQdal+dz7QgSvOaOTuC3uSY8SibMOg+AH5lfKG+C4csAZmPIEP8A2mhi6xK0kcYWSx8tdGST9HoNIaysUbMpxcKCx72EESJaQGZZNyEpX7sG7xYCKAJIG2Zy43dQPaEjOUrK14pJDLDe7bEEP8RFK8KFeVn2Fj1sB0gmchCA6iARoEl+7V+cL581KRoobNMY9SKesVimQm0XTMMsAM6fypGvMa9oU4jDTSosCdHKXb3/AEiw8XaiQH0OVwf9QBUAI8HGgPClZP5MoFrZ1rJp2tAojtlIzyg5zE6gPc/iFidWPpHC+LrNKNuQl+mY2H00dTOIyQfGpjyr08gZupPSsDL4xIT5EAncIL9iQ2mzRSgx5L4DTMRmICkIDMxyA9KkQRIxBRY+InUOD8Qe4FoH/nhMLIQlrVSgHuUpHxg3CcOOZ2UTqkABPZRt0FYbVdHdl+GWq+YFTuwQUub0YF7P4WtB326g5UwOuYFDje/hbn+0SRkJ8igQA7gpdgKuqqyRqx6x5MxCUgNnJfwlJUCC1qJe9y3J4h7EeBBUfvKFGJKSMt+TtX6eCpExLZUJqAW8pB5XYA7coAmoEwKBUEChUonKo71YA+1orxGKRIlgAZ3FWNW3UoKZT7N1hVZYzmoz/i2LAi5rUdOYLEMGhRiwUJzIWHexSGoLNQjtyoxjuVO+1SVFQQkU11sAQkOzPUkho8VOQgtlzZbKKh3ZNz1ZucNaYCJfG8RKKiuWWV5SPKOQO2saD+HMTPKVLmqdJqNg+gj0oStwQFPVCanR25h4LXK+yQXLjKVA1FKgRcqktLYRlWmc4vjwkFAcut1WJoCLNrX4xtcHNC5SVlJBID3G1X9IyGH4cMQtK02Sli4dJBZQcPfqNI2HDFpCCgsABpRrekaRSSo5/I7dlWJVSoJF3ah9OsKOJISuWXLNpt0AYwxxEuqkkJLcg52rrpC2aolJcENS228NMl8MJi0BKt+bn5xWmC+IhiWAbr8jASVRZKLYkcvEgsob48pdiMx5FvUkFoqk4UKbNROgzpHoAA8HDDhy/wDuIHoPu/tFiFAGjH8ygn0BNe8cVnVdItkYVASyWGlSl2vuIvRLA+6wGrs+2a47axxLxaU3Wx1qMvqxIelYHm8QQPEFueRoPyuH7tCJ2wydiSlLlak8mvCjFcZYlKVEjUOK7lnBAgWfiAp1ZlEdUjpUD5iF0whamSCegfvS3eKjH6UohK+JE+WnIJJ9iP8AuKVY1aqAKffI96aU9okrCg1yU5IBV7GnWsEHDEMSlYdvOznZvCADFpRBuhbMQtR8SvXKSf7iPaLRhDq4GlFn3AKT0Bh0FqRRMtRN2dbHqkHfV2itcxZS6kBO7Lc60LBXoYtMylIUrnlJyqIbQWUeiVAQVhsKVhwgne6QOaySpI6uIJl8NKT4/AH8SXzr38gSkJ/1FMMsM6hlRKQoJqQspOR6fdQyX3Vm6xpX0zcvgHh+GIBzLRmLsAgBZBNL+ED1VD2bKFBkmKp94qAFLZlJoR+YR3ImNea1G8DUFPCCnKgdQ/SIhLqGWQFIUarWSp9GQfCj2VEOgtsXFJUoITLQtRIAZS1AU1yLLDmSBUdzP8HnhlLmSUaMlCVLPIFYVcBqD9YczRPy+BKJSdSRXskEPXQs8KMVw77y5jrJZ1FVAPwISQQ/OleUJr7opP4UY1OGQMykZ1UcsA5J2BY1p5dIFOIQtTJS6x93KC2z2SnTUs2jx1Nx8qWyVLzKH3UUtSpAc03fZ7GBF8TUSEIkBKNwUhJYsfGWpViQSxiPwtcIjArKypZIRYDKAByqGal83rpbLwspBe5O7sCXAoDpSnTrAk1C1KaiU60zADVs3PUho4n4PMQcxYfQ9WpVtoXelcGC8alBCUJDnysGL2c+pL6uSYL/AJrMhQW1SCLjxA3PpCuQg63emtiddaEhuseYrFAMmm+l3IoejRa/whj/AAePyJ8Og5g+unZrw0lT1PnZwRevVvTp3pGZw0w5blt6WOpH1r2NwWJXKVV2HmpQjo/6X1hxtkTNLiUBQCwaFJqC/MahmgWRLSUGrvzY+9PlBPDFi6CDLXRmZSCaMQRURTilpluhXhqWItvQGh9ukbJezBv0YvjeDuR5dyKeooIz7N9fONRxiYtipLLSLlLun8xTVPcNGbWvNUGmoNT736xeKQRkznNEjyJCoqzS4qSX15/sdPaAzNyjKEXs5vzKaOeu5jQYmW3lSANSwDtepHaE89QBbMxbTQa1sBHDw64yvoF/KqUSSQD3V7ZXHeBpvDViuZ+zepgwSSbZkjlQnn36iCpJCH8Lbqcva9WfXpBbRTsRz8OoAZgaaso+gYtFQWSGDtuWCe5MaGZhvtR4QtQP4mKfg3vAyuD5S+fKdnVVt6t7xSkvYZMV4aS11mtwkkU5EOT7CmsX/wA8lFEpSbMCKN3dSudUvF83B5mFW2JADXs/PQEdI8TwkFLqUAjS5FLhAHnL7Ue5TSKTtktpA3+JFZCGUXLBKTkBJoAEpG+pMaCXhkoF8hAcrAAUdGl3UlP9Ry5tCBQ0cOlpQsiQhOYJUcxqsEoUAVTCyZddiPzKgRE1EvxE/aTDVglWQE6gkBSi5vQX8zxqkkrRjJ26GuGAY5EbZlrqAFBwVEqCUkv5SpTjrBCJaVAZ1rXXwhIyIP5AQzaABI6s0LJC1LCVLJKbgPlSBc5WYHogVqa0Y8rKzlDkuAcqsiQL1VRQSzB3SSTYg1dN8IboY4ZUxwEIy3qKlIdixJJHYjkIuCykkpOZViskqAOoQbBmuMyuQ1Dkzl5VfZpSybrPgRQNnLlyLgFZFmbU2ypZVVZK3uVOEG1EIPiUPzMGZkrFqUSbA5/2yy6FsBQrWFJSG+6gXJ6bWpCyZwZSnVMn5UnzLUAHCiT4EA7WJvomNIqWkuVKyoQACxtqEhTU3CEBw1Aixz2OQlZUoPLSlxnNkPUiWh/OdVF1m5KRacKLjJgiFYSUppYK1p1V5qByctQkDdXKgrHquIqqUJJVTMVFVdrlySBQE72DxTLlywciEkJACjmrmIqFTCKqa4Gj0F83MvEEmgCUguAAE6VUW+8QKmugsKxJWaJhUxSloZbitmDasNNjpy6cZEpLEks/qP2DwLPnlKQBVRFrsWSW5MKN+kUJQtfmLu9uR/b6eEofQyfoZpW9E2cdmDD3F+UJMXhilaVijaGxB1B3+uj/AAUm9PncX9xHeKwgKTUZTobfCh5xpFpEOznATQWOlLXuUmmmkNZK0jwqdleUjRx93Ys9BcJ1jM4ZZQvdgaW/6sIdyZrpIVYpZyKObOLB2fq8FJMUnY74dMyLEsmihQFsqheirBQ2LDaGHFUDKpMxGdAvfOkfiBFQPbmIA4WFKCXSCzXoR0Pz6PB3FJykDP4ihPmSCykHcVBSeYLdRG0Y2jnk9mMx/Cq55MyqQ7ksU9VDy9wE/wBRhbNAKimanIv8YSzvqtAoQfxJ/wB0aDEyULKVomhCy+RaQUKcXStADKNfuso/hVeAZkpTNMQkBzlUmslR1Yp/ylPchh+JMVQJiv8Akf8A7sr+8/8AxiQd/hg/9uZ/+6REgplWadZQUh3Pq5PLX5VhfMwZUMzZRerV5eL1+UWzpgFVMwalyf2i4qznW1LUFwEhm9Y8+jp2jP4uSsOQlR5sf2gL7RaBVJA5s3UAC/XnGnWEBncl6UzO+z9DVmptZfiGLlqXcODsHJoH59oDRSAJWOTZTvsVEXrXxjYUg3/EEM3gs5AZ2GpP7jtCmdL8VAt+oYdSEmCpCCghkkzCzB3SjN5VeWq1UypGlanK1RgmxSegyYUILKSFLofswVeF6grA8Slf06CpKRQ84hc0kFQIoPAhs7aBSyMqE7E0bypIrAuIx/2AKUJR9qSQpdVhBetyUqmUqASlJ/GQ4H/mJqkupZqSTmCi7gt5mqaUG0aNRjoz29hsyasMSQkAghKFOkEalZLFVPOSpVWGrDLxSg5QhH9XhBUmlRUAG9wA29K1IKyaqAYO33v2HX5QRJlvlJSVhVEIS6ftFAsSWrkBd1XNQHqU1FtuhSSWzvCAl5sxZAmKLP5iK0SDyAqaBiKnwkvBSlLJMwZHdYkg5CjMMpVNWfJRXmU6vGlgkZW4w6gFKmLWFKT55jAolsKSsOkMlSwKZhQAOG88VoXnGdTolBVQ4K1qYglRPmXlYuzJBcCoCtEkjNjTE49IQAgJTLl3XVCEkAeRNVFTAsouulGrA2I4mwyHMCq4PhUUkKdS8p/9NHmGRJzKepqlUVfgWsMQSpEv7svwipBqpZAUrxOQ9atkAkIEycz75lXFsyid+lyYeXoTQXMx6lnOolMpFEgAOW+6gMwJupRoHBLkgQnm8RUsFS2ShNAn7pUpRUE1NaJzKJcqyk3IEG8THlAcJAypAagexNNQSpWpPovxOF8iKGpcPdRIGXRqgJZrvQORDVMVnSsX4EJDhU7xE6hAUQn1UCruN4DGKLpagJJ/3CvoB6wcJOfEuRRIIDaCWcqT2ypMU4yWlFAkFQYf0patdmuS/wB4bwYxDJniVMp9Cx6HLl1sAN9xDjBAKvtSgBDuH01IvCDCy1rBSFVYLUW0P4RsCUjqTyZ5IwuUHM+UMKE2T5Uj/SSIiUbKUqGclQCkhO7Ets7FtWL9nguckMdjazAijb7eo7LpCXAUbkpZqNmGYnuS3pBUpalEvR9dH6dCAenaJjAUp2IvsvHUcvrfT97w84fJIubOnkQ+vL4U2iifkSa+9tKj1ixU8ghaTQ32fXlW8NqnbFlaodYLEJlkhR8BJqB4kHprs2teYi7iE7KsArCFM8uaKoWnVK/xI3Bqm9qwKhKVoKgmrVGpDW5s1OQ3FVOE4jkeVM8clRpmLKQrkqmU7K0NbOI0i/RnJA2NwuUrKZZCQ328l3ybTJR1RqCHaxoXgROOXKPiJWhQov8AEKeYHzEWr4k6KTDqcChSBnADkSZpdIqS8mc3kBLjYGoaoK3HYYBakFBTm8RQwBVuqWBQTE6oFFCqbtFVXATvpP57D7H+6b+sSFX8rK/+pR/aYkFsuomkSti7OW1Gp+bWEWuSK3arNR2YOa27xSpxy5k1jj+YyslKeZJNPXWmrb7x5qZ2NWHpUhAo5IsVNyc1tT62GnOU1IBUWGY05tVty/Law8ucVUqz3H3quTydm7wThlKc3zG33Wdh90PqAOkUTwpk4BwCQFAUAyABSqkOlwVC5ajs1HcU4lYQFZFlSy+ZYamZ82Q/iOq6O1GFINxgDZEFwnwKU5qSfGE+jEvVkp0OZTi0AHxJOW7XGm7vflbrGl0qXSVt2xMtiupUQPuh6+h7UfWOVKq+XxXuVEa2Ioem8GTRQlKBfV6l9aVAoOvuKtJWQhJBJAqSyQb5laMNToAYEa3YbgUleYqQVMoDIPMtZHhQDzuSKgDfKIay5odZKgfuTFoAY0ph8NyAABVZhoGzCOJaSHUlKUsogALQhaXyoBp9tMuX8iMoNiIXZziFhCCEJAIZzkloDlRKrnUk3UbuTGv9dGVZbGP+YCtacklFAkMSQ5OVH9SjUqL6k6BVn2iqTFMMvhloTVAykqcvcJPPxLDmyhAZnJWpKE5kIlgkPcIA8a1tdamJagdgKBMU4jiJUSrLkQBQEvlHlCW1NO5fcusn6E4nWOmKUDmJNyob1cj2I5kHrF8sZUA2UsuQLlKaBI5FYJP5Ewum4oEOomlhps6t9mgzFzknwOfCG/NlAchtSo67w09CcQhc3OM1ABo9gHo/ZidzvAkpBzJc1cG1QRmUem7bnlHgUUhh5id7AEkjsw+rioUaHfUc1V7tXrDUiXEZEVcUcLPrV/qnrC7Ey3KjdPmV/UVPTpfsC+0dhRUEkVYVHKxfs8WTg5y6EvvVNR6l/beGpEOJ5wzwT3BOUFCX/ECMhJ5ZlIpWHEqUoOm7BQtulLNtRNvTmHhkVpszflDj3T8Iaom+VT1HyselPjFZWJlmHlUCTWtejUboGMXTDkB+Xr7j5QFMxeRVA4fQ1FiPSnaBsVi81i3ald9BXS2sFpEpNs5xOKzqamt9XrBHCpIIYpZ+fq3x7NAMnDlag6WPt2O0bPh3DE5OfvGVts0qkKZuJyUDlvwlub78/SEvEse6jmQFJVvQ9jpXTTpD/i3D2rmb6+BjKYkMWNvqojROtCq9sa8OxqFIUhZzyyGWD5gmgC23RQEi6WN0VMxOEVMQJKy60eKUt2KgLB9dAdjlNlRl5C1IWFJuC42PI8jYiNXwxYWyNUjPKO6T908wxSdwP6RGid6IlGtoV/aY3eb6ftEjTfzSPxH+4xIKYrfwXEEuSxGw+Zihct62fpT4PBRkn7uupP08UhBSpjR93fsP1jzTuTKkSWfxXYXIo3O5LW51g2SySVsc2VRSdgaBT7k+XWhOxihYq6j4U30J2T3avIGBpuIK0kvVSnPRIo9aCtuUUtbB70SRiEAgFmAPhFkhLku3MpHaOQsKTm++UlTHcWKuhq1BFRDi4UToLMC55M7dS+0WInJSApQr5QFeYua+xGgtAADOR40N5fvEsXDDskAv1aGWH4aJYXMOUN4UEh0AAeJZSLpBpl+82T78USsOSvKkeMqCat+UE/7j6GGXEF5nQjyIy1NCrKSomtgSQe5PTSLrZEm+IynGJC1KAqEOcoJBU5LqWs6rUWJPQCgEVzEfZIyAHOsBSyxJSk+JCOWi1DfJ+GNThsKkqzKYgZXCqgkhKUg9VJ9HgDGYULBWoE52UrQupRZVtQ7/APcC8j9lfgpkSgmUwfNMcuz+BFnbUq/4CB14UrSAny3fTVqB3vBXEsKtC6FwgBKSA/kBGatw6VK7wu/n1oU6SyVVKdHsrLqKg05CKq+ME3R2cMogg2f1d7HUhRJ7QXjEqC15rFSqgh2csG2b2DQuVxRTkAnKfu3FdUvryNPjHUzHzUqJBdKvECwN2Njzf9otRZLdstAUSCoENat9Dyev6QSCliAoh6sxFb+v10XjiMyxSkjo0RWMWQxQG+EOmSME0soAio2O7iLZc0lyU6DnXkdYUCcKZgeRHyLwXImZag9/kdu8JomhgmeKHXfX6+ucXLmZqpNdRb6+rwvnJKi6U3uIgSUmr10I+qwroajYQ6rGo067cj9axfJQ51rfV+cCoBVrWz6Ft9jDfh0hyHiWx1SGvBMDUGsbGVICRSF3C5GVqQ7QA0VWtGdiXiWFzAxicfw7KTH02dKcRneL4F9Im2iumAVLaGGBmEJBHmlnMnoSyh6se5j3GSMpinCryqBNrHoaH2MaRYmjR/4wj/2x/aP0iQs/wxf4hEi8mTjEORj62puQ3zjmfLUbNW3yF47nSCk0J727R7ImpCXJAJcCwPM7nbudo4Dr/BfNSGCMzAG4N1G5+AHICA50tKclXDOdblVtusNFS2LhJ5WHtFWKRnZgwa9FP0ep9Id2FULJ66OlQADUFbOa73iSsYDUu1gG8zbnoH7xKoUBmZIoSQ/OgsPSJiZSFeKuQBy4ZxokNufmdIpITGsiYJaFzVAFSqJNAfGS6nb8GYDYF/vQpxfEXWAAANSTcFISSaO2mlnjkY5bol0BIzKctVbEMmwZAQANG5QUjCoWoILEqoog0CdVGlTciLemkQl7ZeualEpCCp1HLMU97Ah9iwJ/1x7iZhQtK3d7jQgrCm/t+JhRx51HO1CoqbcJYgc6gfQg/B41CwnOXOQFSh+IqILekJxvaDhMYsKlqUCCAXq+9CWqCQXcawBL4ahaMyGI/wCL/Jx7w6wOBGRaQbeEkChYAA9LRnVqMlZIoomqegulT/TQo+0isjybwhNlDKRfxAvzG/tETwnMnwqJA5D3Dm2/OCV8VcMpLi4f3IIsYrkTkEug5S9hT5j60i05JE9KF8OmgeZPokHvvC3FoWjzFPVv0jSrSFCwS+5Ddjb4QHiOHqUKfFx2rFRn9FRmU4rQp9KetYNw89OtAdbjuNo6m8OY3DjSx7aGK0YXKxBBB2LxbkmCQ1w6BSoPKrda2hkiU4Dh+VD7iAMEgsGL1fcQ5lPTbUPGTYm6PJGB2H10hxgMKzGOsHhCz6afpDEIAFR+sNRsluwzDLaGcuaGvCFSNQf1jvD4hT1h3Q8bNAmZFGLl5hFUle8FZnEHUTwxPGcKzxnVpraPoXE8GCIymJwoBtCi60ULvtF7mJBv2MSLtioZ8QsYQYvzI6D4RIkch0RGa/8AKP1pEwv+Wfyj4CJEiUOXADFXT+U/ERdifIrqj/guJEjREmY4t/nzO/8AwEMOFf5iv9f/APMx7EjZkei3iPlR/wDjH/FcJ+Fef/Sn/mYkSCH9WDNlwC6+g/4ohRx7y/2/+MSJGcf7AjOTf8sfnP8AxTHA8/p8BEiRt6GP9VdBAEjzp6/rEiRmgY44h5R9bRmMXc9/jHsSNI8JGnD9OsPsN5+w+ESJEslmpw3l7RzN1jyJGiJXTg2joXiRIiRohjJg2VHkSBEM5xloyOPuYkSE+ggKJEiQwP/Z"
    },
    {
        name: "pare",
        image: "https://www.peta.org.au/wp-content/uploads/orange-cat-400x400.jpg"
    },
    {
        name: "abhichan",
        image: "data:image/jpeg;base64,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"
    },
    {
        name: "gowshiku",
        image: "https://timesofindia.indiatimes.com/thumb/msid-82432093,imgsize-658201,width-400,resizemode-4/82432093.jpg"
    },
    
]


const Stories: React.FC<StoriesProps> = ({}) => {
    return (
        <div className="px-2">
           
    <div className=" mx-auto ring-4 ring-blue-400 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
             <h1 className="p-4 text-2xl">Stories</h1>
                <div className="md:flex">
            <div className="w-full p-2 px-5 pb-5">
                <ul className="flex space-x-4 overflow-hidden">
                   {CatImage.map((v,i) => 
                            <li key={i} className="flex flex-col items-center">
                           <div className="rounded-full bg-gradient-to-br from-blue-200 to-blue-500 p-1"> <a href="#" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src={v?.image} className="rounded-full" width="60" /> </a> </div> <span className="text-sm w-16 overflow-hidden overflow-ellipsis">{v?.name}</span>
                            </li> )}
                                                
                    
                </ul>
            </div>
        </div>
    </div>
</div>
        );
}

export default Stories