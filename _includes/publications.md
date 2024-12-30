<br>
For the most updated list of publications, see my <a href="https://scholar.google.nl/citations?user=Zw6i1v0AAAAJ&hl=en">Google Scholar</a>.
<br>
If you're interested in my Ph.D. Thesis, see here: <a href="./assets/files/thesis-presentation-mz.pdf">[Slides]</a> <a href="https://arxiv.org/pdf/2404.18977">[Thesis]</a>.

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
  <div class="pub-row" style="margin-bottom:3px;">
    <div class="col-sm-3 abbr" style="position: relative; padding-right:3px; padding-left:3px;">
      {% if link.image %} 
      <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
      {% if link.conference_short %} 
      <abbr class="badge">{{ link.conference_short }}</abbr>
      {% endif %}
      {% endif %}
    </div>
    <div class="col-sm-9" style="position: relative; padding-right:3px; padding-left:3px;">
        <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
        <div class="author">{{ link.authors }}</div>
        <div class="periodical"><em>{{ link.conference_short }}</em> ({{ link.year }})</div>
        <ul class="links" style="list-style: none; padding-left: 0; margin-top: 5px;">
          {% if link.pdf %} 
          <li style="display: inline; margin-right: 10px;"><a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a></li>
          {% endif %}
          {% if link.code %} 
          <li style="display: inline; margin-right: 10px;"><a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a></li>
          {% endif %}
          {% if link.page %} 
          <li style="display: inline; margin-right: 10px;"><a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a></li>
          {% endif %}
          {% if link.bibtex %} 
          <li style="display: inline; margin-right: 10px;"><a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a></li>
          {% endif %}
        </ul>
        {% if link.notes %} 
        <strong><i style="color:#e74d3c">{{ link.notes }}</i></strong>
        {% endif %}
        {% if link.others %} 
        {{ link.others }}
        {% endif %}
    </div>
  </div>
</li>

{% endfor %}

</ol>
</div>
