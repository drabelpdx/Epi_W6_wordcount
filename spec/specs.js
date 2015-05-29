 describe('wordCount', function() {

  it("returns a count and list of words", function() {
    expect(wordCount("It is a mad mad mad world")).to.eql(["3:mad", "1:world", "1:is", "1:a", "1:It"]);
  });
});
