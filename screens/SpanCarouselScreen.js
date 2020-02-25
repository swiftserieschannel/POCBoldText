import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, Animated, TouchableOpacity, PanResponder } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';



// var _carousel = null


export default class SnapCarouselScreen extends Component {

    images = [
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXFxYYFhcVFxUWFxgVFxUXFhcVFRcYHSggGBolHRgXIjEhJSkrMC4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLSstLS8tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAD8QAAEDAgQDBQYFAQcEAwAAAAEAAhEDIQQSMUEiUWEFE3GBkQYyQqGx8BRSwdHhYiMzQ1OS0vFygpOyFRYk/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACMRAAICAgIDAQEBAQEAAAAAAAABAhEDEiExBBNBURRhQiL/2gAMAwEAAhEDEQA/APHNar5VYNVoX0qR8m5Asq7KiwuypqNsCLV0IuVRlWo2wMtUZUWF2VajbAsq4BFyrsq1B2A5V2VGyrsq1G2A5VIYi5VYMWoGwDIrCmmWUUdlFK3Q8U2Iiip7laYw6g0EuxVYzLfTQ8i0alFAdRRROSaFMq7KmDTUGmmoW2AyqMqY7td3aFGsBlXZUfIu7tajWwOVTlRhTVhTWDyAyqciYFNTkQNQtlUhiYFNW7tazai2RdkTORdkWNqDhdCLkUFqc57BwphXhTlRNYKF0IhCiFjWUhdCJlUhiJrBZVOVFDFYU1g8gcq7KmhTXZFrDqxcU0RtJGaxEYxI2VjArTpJyjh1FJi18Bh5UZyo6scRenguipVwcbL2nZ3YxcLBL9p9lFmoXMsyujqeJ1Z4WtQSlSmt3G0YWXVYumMjmnEQNNQWJosVSxUsg4i2RSGI+RTkWs1C+RdkTGRdkWs1C4YpyI+RdlQsNAQxTlRcq6ELDQMNXZUSF0LWageVdkRIXQhZqPPYP2gIEVAHdRY+mhWzhcVTqe44TyNj6b+S8FdXa8rih5Ml2dmTxIS6PoDqSq5i8the36rBBOYbZ7/PVaFP2laQM1MzvBEeQK6Y+TBnJLxJro18q7IgYTtKlU0dB5OsfLmnsispp9EXia7QIMV2sRGsRmUkdjKAAU1YU022giNw5W2DoJd2p7tPCgqPDW+84DxIH1W2G0FAxXaxMtYDoQfC/wBFxpoNjJUVprb7LeJCxgE3hq0KE+Toxs+n9i1m5IlJe0dZpXmML2oQNUPHdol264VhanZ2vNcNTN7QddZNRNYmpJSjl3w4RxTBkKpCuVQlUslRWF0LiVGZazUWhdCp3i7OhZqLQuK4Jd+NYM4m7AS4eUxPNBySCot9B1Cya/b1NueY4TAG5IIDvKPos2t7VflZ8UzOrQdI2JUnngvpVePN/D1C5eY/+1ABsskmC7aASSQ3nAgApdntU8Fxyggk5QYgD4dBJPmlfkwGXjTPWOqAODTqQSPAan5hXK8C7t+sXtqFwzNBAsLgkmDzHTolsV2pUe4vc655W2hT/riP/HL9KtcitOyWZVCkVRzXFsjrcWHJhWCAK4O64VwmUkDRjTWHZOUO0azLNe4Dkbj0KzW1xzRm1RzVIzrpk5Qf1G7R9pKoEENPWL+miu7tqo7/ABI6Dh+iwG4psXKK2sw7gK0cz/SMsC/DYfjap1qP/wBTv3QzXd+Z3qVnNxjRPFp+ybo4phiYvy++qosqZN4ZIL3rtA4xykqA0lHoOpuJAIkGLppuHEx4fOf2KOwVChOnTI0t4WWtge2KrLO/tB/Ubjwd+6SxFanTEuPO28iP3SR7cZIhhI3m3L+UPYkP6rR7Gl2rRcJLsh3Dh+osmhpIMg6EXC8C7ty9mNjrJ5cvP1U0e3Kg90hk/lkevNb3IX1Ue+FQqHVV45ntDWkcU9IF5jePuUen7TOg5mNNjBki+09NdEPZEb1yPRvKE4rzz/ak3im2NpJ+azsV7Q1XfEGjk0AbyJR9qQnrbPWuchly8TX7YrH/ABHJOpjHHVxPiSlfkDrA2e6r4xjc0uHDqJE+Ec0ge2WB75qNLALc/hFvPMfALxzq0oZqKT8hlI+Oj0uJ9pdQxt9ifPb0SdT2jqkyMoF4AHQj9fksMvUZlOWaT+lVgivho1e2KxJmo64gxa0zbklHYhxmSTOtzfxS5colTcm+yqgkFc5VLghyqyksdRC5lGZDlchYaCtcFBehErkDUcVwRC4clAqdEAlFwRhX6D0Ck4o+HoibkCCiF6scU42npoP0C7vCiBlJUhW7881IxB5ooBUK7G3XfiHcz6lWbinD4neRKNiuy4rFukjT5GymtjnuMlx23O2iqXucdSTc36XKvWwdRsEtMESIEpuQcfQDqpJkkk9ZKsHLnsc0w4EeIIUsePzgeIf+jVroNfhZrlfOqh7f8wej/wDaiMrMkS628B0x04Ud0Lo/wt3qg1Vsdm0sPWqNp021sx5vaBYEkkmiYTeP7Ip0ml7m1CBE5arTA0mBR0W9qG9UjzGdVL05X7gnhfUaP6ml59Q1v0Qiyj/mu/8AE7/d9ws5oHrYqXKpKaDaX+a7/wATv9yWqkTYyPAj6pdg60DlRKkuUShYxCiVMqCgY5QuldKFhIK6FxKiUAnQuUteVVAJyiFy5YIY01PdKcykFFIm2yO6UmiFcFcSmpC2yjaARWUQoDlenmJgAk8gmSQrbJ7gKwoNWthvZ2s67srP+o39AtWh7LsgTVM7y2RPS+ivHBJ/Dnlnivp5kYRpAgc/T7+iZo4Fo1C9A7sEgSKjY6yLKv8A8DU2cz1I/RWjhS7RGWdvpmfRZTBByiQI8loMxeiufZ+rzZ4z/Ch3s9VGjmep9NFTSvgiyf6TUex9ntDtNekx9T6pF/Y9ExGYX2O3K/l6JkdlVhrlHUuCf7O7HL3QSXn8tMH5u2CR475aLLLXFmIewmOPA53URm53t5Jqn7JkNzuqCmwb1GwY8BeV6jGYmjg2/wBq5rTc9zS4qhi/FyHUrJxuIc80a7pE1qZbSaTla1wMSfidOXiNhFouTCevOp0wUuNi/s1g6VIOqZhUnhGYFhEEh3Dfcbo2PqUySLEEEamIPRK9mFzmAjKRmqHQ3/tHFGrB5Mx6NcuFu3Z6EVSoXwns5hajTle7O2MzJu0QDIkQ4fuEhiPZEWy1bWnM241vbXZHwzv/ANQGYtIJcIkEHugJjcdDyXoezXMxrS6mRTrCQ5jgQ1xa4tLmn8sjW8aFdWOUa/8ARxZYP/ns8TX9lag917TqdxpJ/b1Sz/ZnEflBuRYjab/fNevxJfSfkqNLXDnuOYOhHUKWYpdf88HyjifkTjwzwFXsuq2JpuEzFtYifqPVK1KDgASCJ0kETeLL6XVeHNLTuCOtxCA/DMLQxwzD+q53/dTfi/jGXl/qPm8KpXu63YOHdJyxMe6YjXT72SVb2XpkDK9wNpmDPMxspPxplV5UPp5BQvQ1vZh2cNa6WkE5iLNuYB66LKqdnVBNpyhpP/dEf+wUZYpx7ReOWEumJLldzCNQpdRcNWnSdNufgkKWCXKxaVEpQkFdClcsEICrBWZTmwBK0MP2W868I66+irCEpdHPPJGPbM9rCtHB9kvdc8I5nXyC1MNg2s0EnmdUxmXZj8ZdyOHL5jfEANHsmi3UF3if2TuHDKfuNa3wF/VBYJMc1ZjNZsRNj02XRePH8OVvJPtjRxJXHFnmkbnQTGp+WnOeUqteoABJIvaNdCbeEfNK/JWra+BjgdpM0DjbgbC5/QIwxpWWxhF456kaiANEVPiyqfIuTG48GkMeVAxskA1KdOd6jgxvqdSkAUHtDCCrTLJAJiDExBlUm3q9exMeu636PTGpgqTe8q4ltaPhY7fllbfzJAWefap9cOZhcuHoiA4gS90zpsJ+XVefqdl0qVGpAzOyO4nbHKfdGg+qj2RqNFOpmtdpnbcX9V57jL2RWV9nrRyQ9UpYV0aOMpNZh62UGSx2ZxMudwnV36aIXauKc2jQaGF4DqReBOwBayRMF0jbcc0922MuGfaXPpuLW6RTi9V/JsSGj4j0F7Yp+TBsNNoJb3DwOZFSm4ymy021HpI2G0k59tm77J9h4yvQFRuHaGuLyBUxDmG73H3RRdETGuybxvsxjmX7mkBa7cU8aeFEJ3BYt7KTRLg5rRJDyLwJMeqlvbNRxgVXgcs5cYH/AGrzbPUSPnnaoxFHGNa6i4OaS45XGqCzIwO4g0aQJtuEfsJzu671hILX1nMcNRxu+R3G63e13u/F03uu3uqgB1Ml1IwT5FYHYeJy0qrHHhca7qcbFrnAs/VdeCqt/bOPPbdL5Rou9tMLXot/ECCZs2mXZSNYhwLSZ10MGx2RwlWnUk0XOcwbuaWmeXXxHNY3spTpvpVmVGggmn4ggPu07G62Oz6baDO7aSRJMnW6v4kZ8P4cnnTx8r/ocDCpyoDsWqOxa76PN2HMi4tSRxR0UfiihwbY0ICqWjokRi9Z8uvRc/EnTklUk+B3aQ07DMMS0WkaDQ6wpdRaRBAIiIgacvBJfiVwxKOqF9jDV+z6ZZlDGCJy2EAwQD80sewaPdinERBLhqTF7nZE/ELvxKR44v4Os8l9E2+y9HiuTPuz8Njy1/hVpeydKOKo4neAAnvxKn8Sp/z4/wAH/qyfpl0srRDQB4K5qpHvV3eoKdBeNvsd75R3qS71calpWeWuWFYbHhU6SqMe4cHXQ30sqChLTxjUDhzG5gwbdPVCc1wAIiZG8bwLrjl5UJS5ZeOBpcDbK5DSfhA1tDYAOsdOpHigVMXILjltEDWW5hAAI158gDrYJV9YtDrZoiIuBzc6dCL32KFhHjOc5iGECL+9aw6SuCfN10dkY/pqYWsM5GbaQCCOZIkH5HomwWmWszSOZiZPugZbHQ+Xksui9pzOAILmyd+KOZjXl4XTLQWNZpmBkyfi1zTPgYT4srVRuieTGnzQQujmubWUuiBAMho94AEibZddz49Us4knQ35xr5L0sPl7OmcmTxqLdsV3GmQ2AMvESdYJMNnc2HkszssjuXTB4m8J+KbEEggtF9eouITntLQytYZgEGxMkkaEDlJhI9hUw4kZcx5GbSQJMclwZJ227s9HFBQglRtVKo/CvI1cx0m5kht4J1AMhHp1sxw9AG57tzzc2OUtZYj4QSf+ockoA2AC6MwIvyF3kRrAna8QtT2UoTUdXjK1vCwSIbYAkW1DbSOZT+56dhx4rlbX09h3TyPijmA79ZVWYYi4zaXJn/bpdXJMe87/AFMCrVEWJ1/qp6rms7qAdp4XMzigOjhcZsbOgkwADEea8LQH9gQ4fFVPgczp+q984zrl137sjf8AqXjO3aJpvdERxO4cpaAQ6wgm9nfJWx5XFUc2fGm0zI9mHgU33uXNt5LSqVY/Ref9nqgz5XaHx1i2nhHmteo3YEk8gNui7cGdRhR5nlYdsmwZzzMbqO805pc1DLRBgC4naY8tlonCHVoIyx728TESNN/LVbJ5eqV9sSHj2LMJJgCT0+cImKJBy20EkaeP3zUhxFWzDYCZ90AgOkkN66Rv6WxrxDyQAAZcA+8EiCW3sP1C5MvmuOSL+UOsCqgPejY35wNTy5eKrWrcRjSbLq+DGWxcSDcgOIy2Im3j6aoTMOdyQJJPDcNnhMbb+oVoeXDa7Flh4L98u75Jh3X9Pmo7xdnsJeod71T3qXwwDjBOURrEx43Co50fcIe5XQPUOd6u71Jd4risOXzReQ3qBtpze9+UG+pAHmhvab2gA7/Tr4otIXtmBEQ0AST05COfNXr0ajhEAc5AtOxdqvJhnkpcs73BCJeuNxe8X/lWrUcomZHOY+RCVNRdfsUlwBQLmo5oMTBsRtE28PHqimuAY4HWIkBwBHOxHEI1II8UFzhlNzPLaZS1HM3iaY1059PVcc1G+Doj0aFUghxzQZNyAJNyTb6IEZRYgz8UQba3JNlRjyY0J6WPOdOio0yQPkbDle/jdCuKNqamHeIkTIu4kg25QIvyvsjvxBMNmxuCWgDU2jrbc6oNPF92Pc3GhInctNyD8tdUGs47w0iYF7Otpv8AcqP01GnSeXgh7JIDi2JsJkw3w015BAqF1JuYFrnEDKyScwicx6LsNSyvu4xw+628gXg6XuPNVxFcmS8ZiCZgAAaACdN5jaw6KkJuKaX0ygm7Mztiq9xzVHS/SNmtABgDYbQq9l1Q0OncRYxcGUtWuXFEwm3U3/fyTPlclRoYkugAEmRlidSRH34L6F2O4UqbKdyYmA2oLmCTYXvK8n2RQAqCS0Zd5Av0kibH6WC9dha7bOmmHEGMznSAYkaSNBbop7LpFsaGa+LfsXxYf4oPPki/i7Xc+Tparr6hVGLH56X+px/VLYh4cC0PpT0Dz9SgVLvrwMxcfGKngDc7rzPb8nOZkZXDSJhrokSb3N+q2oANnU3b/EdBte3hosLHUh3BFycpJnhdMZRmad9BqlcqonNcHlcFIBcNb21uBZb1KpDQXSHwJiGgEgb6gxK8/hqhbfr9/fVbdCoHgah2+Y7aCPp1noruVd9HJNWdTgOzTa5vc2sZ02+q0a9cwbkHKQDJGxJlp1tHr1SeGbxFzRpzGjrm4NhpF9/mbENgd5OaSJIMNmx0PFpItZRyz3aFiqO7wuOaczr6A2kmJ3Oh5q2Ia1zXOsC+5uQQbGJPw2K7DEXEhpBDtJNrOPTnpoDzQqz7w4CwMRHFBABmbkybdFGUm+PwDRfsmscrpcSYscxgEg3ib8IMWtN7oZqSDmBIAIaQdYkiMw5EzHLqs+mx7ajpm4MwSIzAzH5gNDpr5In4wuaNxIhsSCbi8aGMvP5WOnNoDiadDCWzFlvhIiL6wNXWi5FkmKYzkN90mRYgDm2+1tkLC9ohpEiQ2bAAawIkQLCbwpZVBqSOZBu0FwgyTFiYiyeEsik7YHEew+EdDsoB90AunYG+UdDrO5Wa992j+mCZLZueZMbDl0Wq1uSnUcTEgQf6gL2BgCx8Z20WN2bWDuFx97MLGIkE6aQmw5ZOTb5FUbTHGMMSGt90kzfSxgA9QoJBu00gNg4mfNHwYBEyIzN4gTdsnPOxNhaJ8lmlpFpNuQEeVl0xyW3bF1H2cItOtstiSLiS77sln1i4kEuMWjMLwJOvPpCSfXkWdJvc9Z6a3QHBzTeTN+RK54xZfWxvEQTeRudPlv5ITa7bxBEabiCCCTEE208Ui+oTruq5tlZXVB0C1HT98+aihBkmbX8UGURsWsPmix64C57aQdjopo07kgiBHX5DzQw6IB5fU7c1NIGJBj1B+WiATQ7sRmzyb3InTSBuban/AJew2BzDM8lw4ut4208Vj95LwBMW16rYwFMGAXERHwmQJDTMbSQAZ32UZWhRqjVDYAEmOEnXNO/KxI21WZ2vXf7rhBG0kwQBre5sDPRMViA4l2sRrMHrAHzjdYeJrkkyTAmP3WgrY1UAei4WqGniEj0QgJT3Z+CDiOKNfhDtOYzBWa4CuTf7N7SANiBIBMNmIHMC+g21M7LbPa4Df7waWBYdxfViw6TQ0yKgkEn+5GTXRwDiTe4noiZaskCpTdGoylt9LgU49VDVLo6I2karO3KlmtJ0izQYFtIZfRBoY+uC5xr5h+U0pO3xFsA+XVVoiq+cvduFgTmaMvOwIAgGwKp2gXAAENB8JAuTdwIOy1jDNQvfTdDod+YUxdxF4ytJA8T/ADi1MK8MLKzi4jSz2ki8XIvp9U9+KqZR3cNIg2N+moMj7gqmIx+Ie0MJqOJOjmsDdNnCOR+G0jXUZLmxZUzxpJAIPP8A5++i0sJWJYWi5t5C8mdt1TtB3F8RMXLiJJm5iBFtvPdAFSBaZ26DXz5KzWyOZm52fjCDD2wzo2RsCS7ncnfQKuKIBJvaBE3iDA0Mxb+EHC497WifddawNgBG8wbmyIKzcxzNETAiBuYm8/l0N5hczi9uhXHkrh62U5pkEEGRJ0uANBte9kuah/qMkTJPEdJ06EevkOrjGB2UzAJ922kxeP0QcTiCCC1wMaASY38FXRsNGj2gJbmJByu2Ia67b2uNGj5arOFfgcG2BcNS2YEbQDrfyKIHuIL/AHiBNjMAWlwGjdEkal7xqLEW3iR5owhSpgSGO84Sc0uOoiZGkg+SaoV8pDoa6BYRDYMtNufkVnM4b7jTe/0TzK+YtbAAjUGNokn9FpIFF6mYgkRzyiII3JA8/Q3VsJSDnwHQ43BcLZhMaG26LSAa2XCblvOdSYIgA6mCDN+Sq2nlkFpkXkaA6CD+iXrgFBqL2tIaRsZgjXQCD4XlPtpVSJFMRtxNFtjEFZtWiws7yeNxHX80m+hkH0mAmKPabwAOJ3UueD4RfTTXZTlFS7EcTPxeHDaYMwPAST47bjohUg6LnXQGbgTJk6AJvEY2mWxllwiDEASIvBjy5yj06zA1vCN5JAF40E7X8OYTKTS6GTZivoSJbreYBjoBZL5W8/ktOq6m6JIaANGD+BO9ys+pUaJAG9jOg2hXi7KJgiolTUdJkKKbgNRPyPkU4QlE8/nFvXyRKlWDoPvdAFTkB+qrc9UKCHa+b/fmnDi3iDtBAkTadJ2v9EKjhYaXHUeBFvNDLS7hEkC55fL7ug0magmIxxPpB67SlIXGnBhEDR/xp5oqKXQpzWeq3aFAtYMhhxMknKI5CZv8tFn4fCEtJg3jLAubx5D+Vs4Gj+fKI5h0X6jXleDySTkWxxDYTDA++dPiJmYN9AI338kR9YU3OzFgDdABsIuc1zPTSDdArUXudwOyiCRkBIImbm5i8eYV6eElsOyzuXQDykgi2sfqpFqH6eKLh/ZgEa3BI00gfv5Jau8CM7Q4mwIcBe/rc6fwoLXDhpsDmnZhAjq6RM7/AGE1TcBHFxwbF1xGsgQZ8ddt0LNQuWuGgyi8AkkwYmb8xb+VR2JcNYImzpiOhi1rc7Jis8iZGukXkDaCP1OqC5xgAs4TFwLBxB8DsfXosnZmhXtDABzCzNmqA5uLK0zZsFo0tI89F5si0b/ovQhuYktJsCJYZgciSIB4djzCxu1aBa8wZBkyYuRE6E81aD+EMi+iwqkNLdtfPp97IFWrJVnac0EhPRM0XMpuhwBgf3kTYQL+u/ilauGcHADin3SNwh0qhaZ+tx5jdaVBlKoPeyED3ZIG8kSTGywRNtJzdYBOgO43g6fNFpUMwJBhwjMDex0IO6NQ7sX4qg0yFtpNgc22qvUAg58wEZZsXN3DXwLi9isYzxTMkRp9Of09UeiziGXwnrGh6KcTXp5WtaSXN4ZIiW36/VUouINhJIIj9bb680GBo1cM4xBmXQCANRyJn3rGDyG03fdTcKOcUyRrmdG+UQZMnSJ1v0SlBzCyzZNi3LLoEAHM2ZN506hExGMeA2SS2LS1vDuAZEyJ08FzuxGmDqVGuZ7liM1p0DiDOmkjTYJWkJHPz/ldXcLHLEADhEX8Odgf2Va2QOIIBPMDndFcBOrsdAgQBckwNBEwbBCq03ZMs7kiQRsAdegBKrXdAM3i2wF52S1bFGA3QeJ3VYx4GorXZBy2JHIz5zCA4qJXNVAkhXZSnw5+Gql7Ijy+aYqs4eUDbQz0WMLPpxuLfduicw2GOohx2mYnyF/4Q8NTFyRMFo/1GFsMeXUyRDQJAA5C1yfGUGZCdVrwGsLS030Ek3m4XVmtpMLZzPdO0AC++506LUDRkNUe8GuIm+hAM6Akg+Swa7y9xeTJN/4sguQvhFA3mj4HDOqOyhsjUwNhzJQOi2cHiu4pB7ROfNN4IyxAnldGTpcAgrY23s1/uucJgQJIbEmzSLzba11pU8OabS15aTAhp0uRB0kC/VI0sS/3+G4sMswbmRfqfVaNJ3eUmzqQ7wtBI5781zSb+nUkvgrRBzS0gTqXDXyGm2ypiMKxxcXC8wDeSdgZ1K2HUWtw1IxfO9pIgTuJtfRZ9OuG1MuW2YjU8w39Z8gtZqJwjmtysJHKLkm2xO9zry6q2KY5ozATyIbFxsL66pmqC8GCBAIu0O318Vn0GZmh0ub72aD72UxckeHodZKH+hIxGNeIziJAOUAOdfSDpuhiu8nhyQ6xa4PLoGrm2AO18wkiE6MO3LmIBPvEwMxO8nn1SuOApvDAJBLJkmLjSJ04fuEU10BplzQLW3BBGzmgag5pM2ItGv6rP7Uw4qMcWkEtkgcI0jMBBuL8tQU3i6gpte45nZQ8AZiIdoHDw5GUKm6Wlxn3X2BMcIkRMxrt1TIV/h5dsfNDcJum8TSDXkCbb85A/dDFLrb7/ZdJy9CjmqAVdVlYJNKplM/uL7GyJiK82tzJAMk9ZKCVBQoJLBJARqVTK688rGCLpdGF/RYw/h6rXBwMC0ibyZg3BB3mOhTTMRScwgOc0yAQYym9tbyPosNONx5ADSA4ciBqbEjkUriYrVe+8ybjiExOwnwKYp4t4AFj5t/W6OKQcwVCNdr+Fzus3L4+qHDAf//Z",
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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"
    ];

    state = {
        activeSlide:0,
    };

    constructor(props) {
        super(props);
        this.Animation = new Animated.Value(0);
        this.isProgressStopped = false
        this.currentIndex = 0
    }

    componentDidMount() {
        // this.Animation.stopAnimation();
        this.StartProgressBarAnimation();
    }

    componentWillUnmount() {
        this.Animation.stopAnimation();
    }

    StartProgressBarAnimation = (value = 0) => {
        this.Animation.setValue(value);
        this.animationValue = 0;
        Animated.timing(
            this.Animation,
            {
                toValue: 1,
                duration: 2000 * (1 - value)
            }
        ).start((result) => {
            // if (!this.isTouchStart) this.refs.swiperRef.scrollBy(1)
            // console.log(this.isTouchStart);
            // Swiper.this.scrollBy(1,true);

            if (result.finished) {
                this._carousel.snapToNext()
                // this.StartProgressBarAnimation(0)
            }
        });
    }

    get pagination() {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={this.images.length}
                activeDotIndex={activeSlide}
                containerStyle={{ height:20,paddingVertical:10,marginTop: -30, marginHorizontal: 0}}
                dotContainerStyle={{height:0,padding:0,margin:0}}
                dotStyle={{
                    width: 15,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    // backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    backgroundColor: 'rgba(52, 140, 235,1)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this._carousel}
                inactiveDotScale={1}
                animatedFriction={8}
                // animatedDuration={}
                animatedDuration={1000000}
            />
        );
    }


    _renderItem = ({ item, index }) => {
        return (
            <View>
                <Image style={{ width: '100%', height: 200 }} source={{ uri: item }} />
            </View>
        );
    }

    render() {

        const progressWidth = this.Animation.interpolate(
            {
                inputRange: [0, 1],

                outputRange: [0, Dimensions.get('window').width - 0]

            });

        return (
            <View style={{marginTop:8,borderRadius:8,overflow:"hidden",backgroundColor:"",marginHorizontal:10}}>
                <Carousel
                    loopClonesPerSide={80}
                    ref={(c) => { this._carousel = c; }}
                    data={this.images}
                    renderItem={this._renderItem}
                    sliderWidth={Dimensions.get('screen').width - 0}
                    itemWidth={Dimensions.get('screen').width - 0}
                    layout={'default'}
                    //layoutCardOffset={'18'}
                    // autoplay={true}
                    // autoplayDelay={0}
                    loop={true}
                    onSnapToItem={(index) => {
                        console.log(index);
                        this.currentIndex = index
                        this.setState({ activeSlide: index })
                        this.Animation.stopAnimation();
                        this.StartProgressBarAnimation(0)
                    }}
                    onTouchStart={(event) => {
                        this.isProgressStopped = true
                        console.log("mssage from on touch start"+event);
                        this.Animation.stopAnimation(number => this.animationValue = number)
                    }}
                    onScrollEndDrag={(event) => { //working
                        console.log("mssage from on scroll end drag"+event);
                        this.StartProgressBarAnimation(this.animationValue)
                    }}
                    onTouchEndCapture={(event) => {
                        console.log("tocuhe end");
                        console.log("mssage from on touch end"+event);
                        console.log(this.animationValue);
                        this.isProgressStopped = false
                        this.StartProgressBarAnimation(this.animationValue)
                    }}
                    onScrollAnimationEnd={(event) => {
                        console.log("mssage from on animation scroll touch end"+event);
                    }}
                >

                </Carousel>
                {this.pagination}
                <Animated.View style={[this.styles.progressView, { width: progressWidth }]} />

            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            // width: Dimensions.get('window').width - 30,
            backgroundColor: 'gray'
        },
        progressView: {
            marginHorizontal: 0,
            height: 3,
            backgroundColor: 'rgba(52, 140, 235,1)',
            width: '0%',
        }
    });
}


// export default SnapCarouselScreen = ()=>{

//     const _renderItem = ({item, index}) => {
//         console.log(item);
//         return (
//             <View key={index}>
//                 <Image width={200} height={200}  source={{ uri: item }} />
//             </View>
//         );
//     }

//     return <View style={styles.container}>
//          <Carousel
//               layout= 'stack'
//               ref={(c) => { _carousel = c; }}
//               data={images}
//               renderItem={_renderItem}
//               sliderWidth={200}
//               itemWidth={200}
//             />
//     </View>
// }

// const styles = StyleSheet.create({
//     container:{
//         marginVertical: 10,
//         marginHorizontal: 10,
//         height: 200,
//         backgroundColor:'gray'
//     }
// });