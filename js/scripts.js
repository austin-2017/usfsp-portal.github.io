    $(document).ready(function(){


    //test one directly from example follows
        $( "#autocomplete" ).autocomplete({
    source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
        });
    //end test one
    //part two starts here


        var picki = [ "USF", "USFSP", "USFSM", "Other"];
        $( "#autoinstitution" ).autocomplete({
        source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( picki, function( item ){
              return matcher.test( item );
                }) );
            }
        });

        var pickc = [ "Architecture & Community Design", "Applied Arts and New Media", "Arts & Sciences", "Behavioral and Community Sciences", "Business", "College of the Arts", "Education", "Engineering", "FMHI: de la Parte Florida Mental Health Institute", "Global Sustainability", "Graduate School", "Honors College", "  Hosp & Tourism Leadership", "Hotel & Rest Mgt", "Hotel & Tech Leadership", "Human and Social Sciences",  "Medicine", "  Public Health", "Technology and Innovation ",  "Undergraduate Studies"];

        
        $( "#autocollege" ).autocomplete({
        source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( pickc, function( item ){
              return matcher.test( item );
                }) );
            }
        });


        var pickd =  ["Accounting", "Administration/Supervision", "Adult/Vocational/Hum Res Div", "Africana Studies", "Aging Studies", "Air Force (ROTC)", "American Studies", "Anthropology", "Architecture", "Army (ROTC)", "Art", "Art Education", "Astronomy", "Athletic Training", "Basic & Interdisciplinary Eng", "Biology", "Biology - Integrative", "Biology-Cell, Micro, Molecular", "Biology-Cell, Molecular & Micr", "Business Administration","Business Administration - Gen", "Cell, Micro, and Molecular Bio", "Chemical & Biomedical Eng", "Chemistry", "Child & Family Studies", "Childhood Ed & Literacy Stdies", "Civil & Environmental Eng", "Classics (Greek and Latin", "Co-op Education", "Communication", "Communication Sciences & Disorders", "Community and Family Health", "Community Experiential Learning", "Counselor Education", "Criminology", "Curriculum", "Dance", "Dean's Office", "Early Childhood Education", "Economics", "Education - General", "Educational Leadership", "Educational Psychology", "Electrical Engineering", "Elementary Education","Engineering Computer Science","English", "English Ed & Speech Comm. Ed.", "Entrepreneurship", "Environ. & Occupational Health", "Environmental Science & Policy Program", "Epidemiology and Biostatistics", "Exceptional Child Education", "Finance", "FMHI", "Foreign Language Education", "Foundations", "Geography", "Geology", "Geosciences, School of", "Global Health", "Government & Intl Affairs", "Graduate School Department", "Health Policy and Management", "Higher Ed/Community College Ed", "History", "Honors Program", "Hotel & Restaurant Management","Humanities & Cultural Studies", "Humanities", "Industrial Systems", "Information Sys & Decision Sci", "Information Technology", "Instructional Technology", "Interdisciplinary Arts & Scien", "Interdisciplinary Social Sci", "Interdisciplinary Studies", "International Studies", "Latin Am Studies/Caribbean Ctr", "Leadership Studies", "Library and Information Sci", "Management and Organization", "Marine Science", "Marketing", "Mass Communication","Mathematics and Statistics","Mathematics Education", "Measurement-Research", "Mechanical Engineering", "Medical Sciences", "Medical Sciences", "Mental Health Law & Policy", "Music", "Music Education", "Naval (ROTC)", "Nursing", "Philosophy", "Physical Education (Elective)", "Physical Education for Teacher", "Physical Therapy", "Physics", "Political Science", "Psychology", "Public Administration", "Public Health", "Reading & Learning Strategies", "Rehab & Mental Hlth Counseling", "Religious Studies", "School of Aging Studies", "School of Information", "School of Public Affairs", "School Psychology", "Science Education", "Secondary Education, General", "Social Foundations", "Social Science Education", "Social Work", "Sociology", "Student Affairs - General", "Student Leadership", "Theater & Dance","Women's and Gender Studies", "World Languages"  ];

        
        $( "#autodepartment" ).autocomplete({
        source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( pickd, function( item ){
              return matcher.test( item );
                }) );
                }
            });
         });
