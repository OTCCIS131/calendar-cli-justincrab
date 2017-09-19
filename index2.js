/* Program:     Calendar
   Developer:   Justin Crabtree
   Date:        9.18.2017 
   Purpose:     A really fun, exciting, cheery calendar for you to enjoy.
                Stay timely with these unique features.     */
const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S   M   T   W   Th  F   S   ')

     let monthRange = month.range('month')
     let firstDay = monthRange.start.day()
 
    // console.log(firstDay)
    // Here, we get an array of days in the month
    let days = Array.from(monthRange.by('days'))

    // Then, we'll perform several operations on this array of days
    _.chain(days)
        .map(day => { // Transforms items in the array
           let date = day.format('DD')
            // let dateOutput = ' ' // TODO: Change this to output a two-digit date

            // TODO: Highlight September 10th          
            // TODO: Highlight YOUR birthday!
                if(day.month() == 8 && day.date() == 10) {
                    date = chalk.bgRed(date)
                }//adam's bday
                if(day.month() == 1 && day.date() == 21) {
                    date = chalk.bgBlue(date)
                }//my bday
                if(day.month() == 11 && day.date() == 15) {
                    date =  "🎉 ";
                }

            return date// return dateOutput
        })
        .tap(days => { // Allows us to manipulate the collection while chaining
            for (let i = 0; i < firstDay; i++)
                {//for() loop goes here
                    days.unshift('  ')
                }// TODO: Append blank spaces (using days.unshift('  ')) so that the 1st ends up under the right day column
        })
        .chunk(7) // Changes the array of days to be an array of weeks, each week containing 7 items from the days array
        .each(week => {
            //maybe use for loop instead???
                    
            // TODO: Join the days together to form one string representing the week
            console.log(_.join(week, '  '))// TODO: console.log it
        })
        .value() // This triggers the above operations on the chain

    console.log('') // Puts a blank line between each month
 }) 